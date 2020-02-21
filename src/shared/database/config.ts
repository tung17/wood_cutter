import * as mongoose from 'mongoose';
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

let url:string = 'mongodb://localhost/datastore';

export default function connect()
{
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
    var db:any = mongoose.connection;
    db.on('error',console.error.bind(console, 'connection error:'));
    db.once('open',()=>{
        console.log('connected');
    })
}