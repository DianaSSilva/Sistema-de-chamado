import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAq3Qj5bwWYmcr90bMBCs0-6lJwMT-ZVGU",
    authDomain: "sistemas-de-chamadas-a26ba.firebaseapp.com",
    projectId: "sistemas-de-chamadas-a26ba",
    storageBucket: "sistemas-de-chamadas-a26ba.appspot.com",
    messagingSenderId: "551300600525",
    appId: "1:551300600525:web:27dabe1859fe5259238f84",
    measurementId: "G-L9FDV6ZP23"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth, db, storage};