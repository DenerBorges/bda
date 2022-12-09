import { initializeApp } from 'firebase/app'
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import {
    getDatabase,
    set,
    ref
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
        const auth = getAuth();
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log({"Created User ":{"uid":credentials.user.ui, "email": email}});
            const newUser = await set(ref(db, 'user/' + credentials.user.uid), {
                "email": email,
            })
            process.exit(0)
           //implemente aqui a função para criar um usuário
           //throw new Error("Função indisponível") //remova essa linha
        } catch (error) {
            console.error(error.message)
            process.exit(0)
        }
    }

    async doSignInWithEmailAndPassword(email, password) {
        try {
            const auth = getAuth();
            const user = {
                email: 'user@email.com',
                password: '123456'
            }
            console.log({"token":auth.currentUser?.accessToken});
            const credentials = await signInWithEmailAndPassword(auth, user.email, user.password);
            console.log({"token":auth.currentUser?.accessToken});
            console.log({"uid":auth.currentUser.uid});
            /**
            Quando o usuário estiver logado atribua o valor TRUE
            ao atributo this.isLogged e as credenciais ao atributo this.credentials
            deverá retornar a propriedade user do atributo this.credentials.user
            */
           //implemente aqui função logar o usuario
           throw new Error("Função Indisponível!!") //remova essa linha
        } catch (error) {
            console.error(error.message)
            throw error;
        }
    }

    doSignOut = async () => {
        const auth = getAuth()
        await signOut(auth);
        console.info('desconectado')
        console.log({"token": auth.currentUser?.accessToken});
    };
}

export default Firebase;
