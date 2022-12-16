//                          Comandos da Tarefa 3

// loja> db.produtos_aula_08.dropIndex("nome_text")
// { nIndexesWas: 2, ok: 1 }
// loja> db.produtos_aula_08.createIndex({descricao:'text'})
// descricao_text
// loja> db.produtos_aula_08.getIndexes()
// [
//   { v: 2, key: { _id: 1 }, name: '_id_', ns: 'loja.produtos_aula_08' },
//   {
//     v: 2,
//     key: { _fts: 'text', _ftsx: 1 },
//     name: 'descricao_text',
//     ns: 'loja.produtos_aula_08',
//     weights: { descricao: 1 },
//     default_language: 'english',
//     language_override: 'language',
//     textIndexVersion: 3
//   }
// ]
