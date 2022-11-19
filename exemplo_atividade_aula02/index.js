import {initializeApp} from "firebase/app";
import {getDatabase, push, ref} from "firebase/database";

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

push(ref(db, 'clientes/'), {
    nome: "Maria",
    idade: 15,
}).then(console.log("Registro inserido!"))
    .catch(e => console.error("Erro ao Inserir" + e))

push(ref(db, 'clientes/'), {
    nome: "João",
    idade: 25,
}).then(console.log("Registro inserido!"))
    .catch(e => console.error("Erro ao Inserir" + e))

push(ref(db, 'clientes/'), {
    nome: "Ana",
    idade: 23,
}).then(console.log("Registro inserido!"))
    .catch(e => console.error("Erro ao Inserir" + e))
