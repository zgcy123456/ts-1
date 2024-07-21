import express, { Application } from 'express';
import bodyParse from 'body-parser';
import {readFileSync} from 'fs';
import {resolve} from 'path';
import {readFile} from './utils';

const app:Application = express();

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());




app.all('*', (req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-method', 'POST,GET,PUT,DELETE,OPTION');
    next();
});


app.get('/todolist', function(req,res){
    const todoList : string = readFileSync(resolve(__dirname,'todo.json'), 'utf8');
    console.log(todoList);
    res.send(readFile('todo.json'));
});


app.post('/toggle', function(req,  res){

});

app.post('/remove', function(req,  res){

});

app.post('/add', function(req,  res){

});

app.listen(8080, function(){
    console.log('welcome to Express');
    console.log('listening on port 8080');
});