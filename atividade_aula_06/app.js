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
    // const produto = {
    //     id_prod: 130,
    //     nome : "SmartWatch Samsung 5G 4GB",
    //     descricao: "SmartWatch Samsung MEM 4GB Processador Exynos Ultimate",
    //     importado: true,
    //     preco: 17450,
    //     qtd_estoque: 150
    // }

    // const result = await client.db('loja')
    //                         .collection('produtos')
    //                         .insertOne(produto)
    // console.log(result.acknowledged && 'Produto Inserido!');

    // Tarefa 2
    // const produtos = [
    //     {
    //         "id_prod":139,
    //         "nome":"Cadeira Gamer Husky Gaming Hailstorm Blue",
    //         "descricao":"Cadeira Gamer Husky Gaming Hailstorm, Preto e Azul, Com Almofadas, Reclinável, Descanso de Braço 2D - HHA-BB",
    //         "qtd_estoque":250,
    //         "preco":1249.90,
    //         "importado":false,
    //         "desconto":20
    //     },
    //     {
    //         "id_prod":140,
    //         "nome":"Cadeira Gamer Husky Gaming Hailstorm 900",
    //         "descricao":" Preto e Vermelho, Com Almofadas, Reclinável com Sistema Frog, Descanso de Braço 3D - HGMA085",
    //         "qtd_estoque":130,
    //         "preco":1449.90,
    //         "importado":false,
    //         "desconto":5
    //     },
    //     {
    //         "id_prod":141,
    //         "nome":"Jogo Ghostwire: Tokyo, PS5",
    //         "descricao":"Aproveite essa oportunidade e adquira seu Jogo Ghostwire: Tokyo, PS5 com Ray tracing e áudio 3D.",
    //         "qtd_estoque":210,
    //         "preco":264,
    //         "importado":true,
    //         "desconto":15
    //     },
    //     {
    //         "id_prod":141,
    //         "nome":"Computador All In One Positivo Master A1120",
    //         "descricao":"Computador All In One Positivo Master A1120, Intel Celeron N 4000, 4GB, 500GB, 21.5´ Full HD, Windows 10 Home - 1702399",
    //         "qtd_estoque":110,
    //         "preco":2599.9,
    //         "importado":false,
    //         "desconto":10
    //     },
    //     {
    //         "id_prod":142,
    //         "nome":"Smartphone Asus Zenfone 8 5G",
    //         "descricao":"Smartphone Asus Zenfone 8 5G ZS590KS-2A077BR, 8GB RAM, 128GB, Câmera Dupla 64MP, Tela 5.92, Preto - 90AI0061-M00830",
    //         "qtd_estoque":410,
    //         "preco":3799.9,
    //         "importado":true,
    //         "desconto":12
    //     }
    // ]
    // const result = await client.db('loja')
    //                         .collection('produtos')
    //                         .insertMany(produtos)
    // console.log(result.acknowledged && 'Produtos Inseridos!');

    // Tarefa 3
    // 1)
    // const resultados = await client.db('loja').collection('produtos').find({},
    //     {projection: {
    //         _id: 0,
    //         descricao: 0,
    //         importado: 0
    //     }
    // }).toArray();

    // 2)
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({},{
    //         sort:{qtd_estoque:1},
    //         projection:{ _id: 0, descricao: 0, importado: 0,}
    //     }).toArray()

    // 3)
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({
    //         preco:{$gt:10000}
    //     },{
    //         projection:{ _id: 0, descricao: 0, importado: 0,}
    //     }).toArray()

    // 4)
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({ 
    //         $and:[
    //             {qtd_estoque:{$gte:100}},
    //             {qtd_estoque:{$lte:500}}
    //         ]
    //     },{
    //         sort:{qtd_estoque:-1},
    //         projection:{ _id: 0, descricao: 0, importado: 0,}
    //     }).toArray()

    // 5)
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({ 
    //         importado: true
    //     },{
    //         sort:{preco:1},
    //         projection:{ _id: 0, descricao: 0,}
    //     }).toArray()

    // 6)
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({ 
    //         importado: false,
    //         preco: {$lt: 10000}
    //     },{
    //         sort:{preco:1},
    //         projection:{ _id: 0, descricao: 0,}
    //     }).toArray()

    // 7)
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({
    //         preco:{$in: [2599.9, 3500, 4500, 18500, 20500]}
    //     },{
    //         projection:{ _id: 0, descricao: 0, importado: 0,}
    //     }).toArray()

    // 8)
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({
    //         qtd_estoque:{$ne:150}
    //     },{
    //         projection:{ _id: 0, descricao: 0, importado: 0,}
    //     }).toArray()

    // Tarefa 4
    // const resultados = await client.db('loja').collection('produtos')
    //     .find({
    //         desconto:{$exists:true}
    //     },{
    //         sort:{desconto:1},
    //         projection:{ _id: 0, descricao: 0, importado: 0,}
    //     }).toArray()

    // const resultados = await client.db('loja').collection('produtos').find().toArray();
    console.table(resultados)
} catch (error) {
    console.log(error);
}
finally {
    await client.close();
    process.exit(0);
}
