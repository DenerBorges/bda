//                          Comandos da Tarefa 2

// loja> db.produtos_aula_08.dropIndex("descricao_text")
// { nIndexesWas: 2, ok: 1 }
// loja> db.produtos_aula_08.getIndexes()
// [
//   { v: 2, key: { _id: 1 }, name: '_id_', ns: 'loja.produtos_aula_08' }
// ]
// loja> db.produtos_aula_08.createIndex({nome:'text'})
// nome_text
// loja> db.produtos_aula_08.getIndexes()
// [
//   { v: 2, key: { _id: 1 }, name: '_id_', ns: 'loja.produtos_aula_08' },
//   {
//     v: 2,
//     key: { _fts: 'text', _ftsx: 1 },
//     name: 'nome_text',
//     ns: 'loja.produtos_aula_08',
//     weights: { nome: 1 },
//     default_language: 'english',
//     language_override: 'language',
//     textIndexVersion: 3
//   }
// ]
