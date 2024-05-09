import { auth } from '@/config/firebase';
import {
  createUserWithEmailAndPassword as createFirebaseUserWithEmailAndPassword,
  signInWithEmailAndPassword as signFirebaseInWithEmailAndPassword,
} from 'firebase/auth';

type CreateUserWithEmailAndPasswordParams = {
  email: string;
  password: string;
};

export const createUserWithEmailAndPassword = ({ email, password }: CreateUserWithEmailAndPasswordParams) => {
  createFirebaseUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
};

type SignInWithEmailAndPasswordParams = {
  email: string;
  password: string;
};

export const signInWithEmailAndPassword = ({ email, password }: SignInWithEmailAndPasswordParams) => {
  signFirebaseInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
};
