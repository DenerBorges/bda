import {MongoClient} from 'mongodb';
import {promises as fs} from 'fs';

const myDB = {
    server: 'localhost',
    port: 27017,
}
const uri = `mongodb://${myDB.server}:${myDB.port}`;
const client = new MongoClient(uri);

try {
    await client.connect()
    if (client.db('admin').command({"ping": 1})) {
        console.log("Conectado!");
    } else {
        throw Error("Erro ao conectar ao banco!");
    }
    const dbName = 'loja';
    
    // Tarefa 1
    // const resultados = await client.db('loja').collection('produtos_aula_08')
    //     .find({ 
    //         $text: {
    //             $search: "GAMER"
    //         }
    //     },{
    //         projection:{ _id: 0}
    //     }).toArray()

    // Tarefa 2
    // const resultados = await client.db('loja').collection('produtos_aula_08')
    //     .find({ 
    //         $text: {
    //             $search: "SmartWatch",
    //             $caseSensitive: true
    //         }
    //     },{
    //         projection:{ _id: 0}
    //     }).toArray()

    // Tarefa 3
    // const resultados = await client.db('loja').collection('produtos_aula_08')
    //     .find({ 
    //         $text: {
    //             $search: "\"Câmera Dupla\""
    //         }
    //     },{
    //         projection:{ _id: 0}
    //     }).toArray()

    // const resultados = await client.db('loja').collection('produtos_aula_08').find().toArray();
    console.table(resultados)
} catch (error) {
    console.log(error);
}
finally {
    await client.close();
    process.exit(0);
}
