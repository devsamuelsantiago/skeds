import { User } from '@/common/models/user';
import { database } from '@/config/firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { ref, set, get } from 'firebase/database';
import { v4 } from 'uuid';

type CreateDatabaseUserParams = {
  user: FirebaseUser;
  name: string;
  type: 'organization' | 'teacher' | 'student' | 'admin';
};

export const createDatabaseUser = async ({ user, name, type }: CreateDatabaseUserParams) => {
  try {
    const data = {
      type: type,
      profile: {
        name: name,
        email: user.email,
      },
      organizationUid: type === 'organization' ? { uid: v4() } : null,
    };
    await set(ref(database, `users/${user?.uid}/`), data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getDatabaseUser = async (userUid: string) => {
  try {
    const snapshot = await get(ref(database, `users/${userUid}/`));
    if (snapshot.exists()) {
      return snapshot.val() as Omit<User, keyof FirebaseUser>;
    }
  } catch (error) {
    console.error(error);
  }
};
