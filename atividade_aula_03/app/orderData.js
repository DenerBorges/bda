import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    const consulta = fb.query(fb.ref(db, `produtos/`), fb.orderByKey('id_prod'))
    fb.onValue(consulta, dados => {
        console.log(dados.val());
    })
}).catch(err=>console.log(err))