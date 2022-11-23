import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, child} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBZWim4ZwuAF5L7ufZyAaQp9j1VEchWWc0",
    authDomain: "exemplobancodedados-a7a5d.firebaseapp.com",
    databaseURL: "https://exemplobancodedados-a7a5d-default-rtdb.firebaseio.com",
    projectId: "exemplobancodedados-a7a5d",
    storageBucket: "exemplobancodedados-a7a5d.appspot.com",
    messagingSenderId: "367780189808",
    appId: "1:367780189808:web:ef446d7875e157744786b5",
    measurementId: "G-0K0173TZJS"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const refNode = ref(db, 'clientes/-NFW2VyPv-vpQRsa3YXr');
const refAttr = child(refNode, 'sobrenome');
set(refAttr, "Gomes")
    .then(() => {
        console.log("Alterado com sucesso!");
        process.exit(0)
    })
    .catch(e => console.error("Erro ao alterar!" + e))