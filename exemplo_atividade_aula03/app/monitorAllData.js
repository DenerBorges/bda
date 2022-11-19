import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    fb.onValue(fb.ref(db, `produtos/`), (snapshot) => {
        console.log(snapshot.val());
        process.exit();
    })
}).catch(err=>console.log(err))