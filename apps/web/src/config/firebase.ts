import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdLUoPhjkPqW55NcHgCSUsWOHavcxWajQ',
  authDomain: 'skeds-617e4.firebaseapp.com',
  projectId: 'skeds-617e4',
  storageBucket: 'skeds-617e4.appspot.com',
  messagingSenderId: '169850328851',
  appId: '1:169850328851:web:657d015ae6f2b30637ece6',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
