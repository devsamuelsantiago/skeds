import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCdLUoPhjkPqW55NcHgCSUsWOHavcxWajQ',
  authDomain: 'skeds-617e4.firebaseapp.com',
  projectId: 'skeds-617e4',
  storageBucket: 'skeds-617e4.appspot.com',
  messagingSenderId: '169850328851',
  appId: '1:169850328851:web:657d015ae6f2b30637ece6',
  databaseURL: 'https://skeds-617e4-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
