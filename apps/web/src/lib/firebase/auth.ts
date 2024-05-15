import { auth } from '@/config/firebase';
import {
  createUserWithEmailAndPassword as createFirebaseUserWithEmailAndPassword,
  signInWithEmailAndPassword as signFirebaseInWithEmailAndPassword,
} from 'firebase/auth';

type CreateUserWithEmailAndPasswordParams = {
  email: string;
  password: string;
};

export const createUserWithEmailAndPassword = async ({ email, password }: CreateUserWithEmailAndPasswordParams) => {
  try {
    const { user } = await createFirebaseUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
  }
};

type SignInWithEmailAndPasswordParams = {
  email: string;
  password: string;
};

export const signInWithEmailAndPassword = async ({ email, password }: SignInWithEmailAndPasswordParams) => {
  try {
    const { user } = await signFirebaseInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
  }
};
