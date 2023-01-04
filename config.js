
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDSSzP1G9yz_34S2YMdgXz5T9n-rk3AGxo",
  authDomain: "webb-2b360.firebaseapp.com",
  projectId: "webb-2b360",
  storageBucket: "webb-2b360.appspot.com",
  messagingSenderId: "898845011807",
  appId: "1:898845011807:web:c3a9df26e78ae7008c10ea"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export {firebase};