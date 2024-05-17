import { v4 } from 'uuid';
import { database } from '@/config/firebase';
import { ref, set, remove, get, onValue } from 'firebase/database';

type CreateGridParams = {
  organizationUid: string;
  name: string;
  type: 'classes' | 'subjects';
};

export const createGrid = async ({ organizationUid, name, type }: CreateGridParams) => {
  try {
    const data = {
      name: name,
    };
    await set(ref(database, `organizations/${organizationUid}/grid/${type}/${v4()}`), data);
  } catch (error) {
    console.error(error);
  }
};

type DeleteGridParams = {
  organizationUid: string;
  gridUid: string;
  type: 'classes' | 'subjects';
};

export const deleteGrid = async ({ organizationUid, gridUid, type }: DeleteGridParams) => {
  try {
    remove(ref(database, `organizations/${organizationUid}/grid/${type}/${gridUid}`));
    if (type === 'subjects') {
      get(ref(database, `organizations/${organizationUid}/grid/classes`)).then((snapshot) => {
        if (snapshot.exists()) {
          const classes = snapshot.val();
          Object.keys(classes).forEach((key) => {
            const classSubjects = classes[key].subjects;
            if (classSubjects && classSubjects[gridUid]) {
              delete classSubjects[gridUid];
              updateGrid({
                organizationUid,
                gridUid: key,
                type: 'classes',
                data: { ...classes[key], subjects: classSubjects },
              });
            }
          });
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
};

type UpdateGridParams = {
  organizationUid: string;
  gridUid: string;
  type: 'classes' | 'subjects';
  data: Record<string, unknown>;
};

export const updateGrid = async ({ organizationUid, gridUid, type, data }: UpdateGridParams) => {
  try {
    await set(ref(database, `organizations/${organizationUid}/grid/${type}/${gridUid}`), data);
  } catch (error) {
    console.error(error);
  }
};

export const getGrid = async ({ organizationUid, type }: { organizationUid: string; type: 'classes' | 'subjects' }) => {
  try {
    const snapshot = await get(ref(database, `organizations/${organizationUid}/grid/${type}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (error) {
    console.error(error);
  }
};

export const onGrid = ({
  organizationUid,
  callback,
}: {
  organizationUid: string;
  callback: (snapshot: any) => void;
}) => {
  const gridRef = ref(database, `organizations/${organizationUid}/grid/`);
  onValue(gridRef, (snapshot) => {
    callback(snapshot.val());
  });
};
