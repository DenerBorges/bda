import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    fb.onChildChanged(fb.ref(db, `produtos/`), (snapshot) => {
        console.log(snapshot.val());
        if(snapshot.key == '-MwSzyJMlNDToTGtPuhc') {
            fb.off(fb.ref(db, `produtos/`), 'child_changed')
            console.log('callback removido!');
        }
    })
}).catch(err=>console.log(err))