import { database } from '@/config/firebase';
import { ref, set } from 'firebase/database';

type CreateOrganizationParams = {
  organizationUid: string;
  ownerUid: string;
};

export const createOrganization = async ({ organizationUid, ownerUid }: CreateOrganizationParams) => {
  try {
    const data = {
      ownerUid: ownerUid,
    };
    await set(ref(database, `organizations/${organizationUid}/`), data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
