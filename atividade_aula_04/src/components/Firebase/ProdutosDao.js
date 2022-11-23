import {
    ref,
    query,
    orderByChild,
    onChildAdded,
    endAt,
    startAt,
    startAfter,
} from "firebase/database"

function getOrderByChild(order,db,callback){
    //Exemplo
    console.log(order);
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB,orderByChild(order))
    onChildAdded(consulta,callback)
}

function getFilterByChild(filter, value, db, callback) {
    const refDB = ref(db, "produtos/");
    const consulta = query(refDB, orderByChild(filter), startAt(value));
    onChildAdded(consulta, callback);
}

function getMostExpensive(db,setValue,list){
    const refDB = ref(db, "produtos/");
    const consulta = query(refDB, orderByChild("preco"));
    onChildAdded(consulta, (dados) => {
        list.unshift(dados.val());
    });
    setValue([...list]);
}

function getMostCheap(db,callback){
    const refDB = ref(db, "produtos/");
    const consulta = query(refDB, orderByChild("preco"));
    onChildAdded(consulta, callback);
}

function getPriceRange(value, db,callback){//0--->limit
    const refDB = ref(db, "produtos/");
    const consulta = query(refDB,orderByChild("preco"), startAfter(0), endAt(Number(value))
    );
    onChildAdded(consulta, callback);
}

export {getOrderByChild, getFilterByChild, getMostExpensive, getMostCheap, getPriceRange}
