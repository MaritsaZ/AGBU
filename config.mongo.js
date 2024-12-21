
//ORM (Object-Relational Mapping, объектно-реляционное отображение) — 
//Простыми словами:ORM — это "посредник" между вашей программой и базой данных. Он автоматически преобразует данные из реляционной базы (таблицы, строки, столбцы) в объекты языка программирования и обратно.
//mongoose — это ORM для MongoDB, 
require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGODB_URL; //.env ից վերցնել MONGODB_URL արեքը

mongoose.connection.once('open', ()=>{ //ստուգվում է կապ կարող ենք ստեղծել թե ոչ
    console.log("successfully connected");
    
});
mongoose.connection.on('error', (err)=>{
    console.error(err);
});
const connectMongo = async ()=>{
    await mongoose.connect(url);  // await mongoose.connect(url, {dbName: 'users'}); amen angam nor collections e ugharkum
}
const disconnectMongo = async ()=>{
    await mongoose.disconnect(url); // await mongoose.disconnect(url, {});
}
module.exports = {connectMongo, disconnectMongo}; //экспорт объекта, содержащего функции connectMongo и disconnectMongo.