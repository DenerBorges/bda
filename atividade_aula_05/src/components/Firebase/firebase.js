import { initializeApp } from 'firebase/app'
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import {
    getDatabase,
    ref,
    set
} from "firebase/database"
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

class Firebase {

    constructor() {
        this.app = initializeApp(firebaseConfig)
        this.db = getDatabase(this.app)
        this.auth = getAuth();
        this.isLogged = false;
        this.credentials =null;
    }

    // *** AUTH API ***
    async doCreateUserWithEmailAndPassword(email, password) {
        try {
           const cadastro = await createUserWithEmailAndPassword(this.auth, email, password);
           console.log(cadastro.user.uid);
           await set(
            ref(this.db, 'users/' + cadastro.user.uid), {
            "email": email,
            "adimin": true
            })
           return cadastro.user;
        } catch (error) {
            console.error(error.message)
            throw error;
        }
    }

    async doSignInWithEmailAndPassword(email, password) {
        try {
            /**
            Quando o usuário estiver logado atribua o valor TRUE
            ao atributo this.isLogged e as credenciais ao atributo this.credentials
            deverá retornar a propriedade user do atributo this.credentials.user
            */
           this.credentials = await signInWithEmailAndPassword(this.auth, email, password);
           console.log({"token":this.auth.currentUser?.accessToken});
           this.isLogged = true;
           return this.credentials.user;
        } catch (error) {
            console.error(error.message)
            throw error;
        }
    }

    doSignOut = () => {
        signOut(this.auth);
    };
}

export default Firebase;
