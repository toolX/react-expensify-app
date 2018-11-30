import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyA7eJtuYvRm1T0MiG8-OPsqeUiSvy0SuSQ",
  authDomain: "expensify-d5774.firebaseapp.com",
  databaseURL: "https://expensify-d5774.firebaseio.com",
  projectId: "expensify-d5774",
  storageBucket: "expensify-d5774.appspot.com",
  messagingSenderId: "1072961648572"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('age').set('toolX');
