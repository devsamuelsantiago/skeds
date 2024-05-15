import { User as FirebaseUser } from 'firebase/auth';

export type User = {
  type?: 'organization' | 'teacher' | 'student' | 'admin';
  profile?: {
    name?: string;
    email?: string;
  };
  organizationUid?: {
    uid: string;
  };
} & FirebaseUser;
