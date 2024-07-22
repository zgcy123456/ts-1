import express, { Application } from 'express';
import bodyParse from 'body-parser';
import {readFileSync} from 'fs';
import {resolve} from 'path';
import {fileOperation, readFile, writeFile} from './utils';
import { ITodoData } from '../src/js/typing';

const app:Application = express();

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());




app.all('*', (req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-method', 'POST,GET,PUT,DELETE,OPTION');
    next();
});


app.get('/todolist', function(req,res){
    // const todoList : string = readFileSync(resolve(__dirname,'todo.json'), 'utf8');
    const todoList : string = fileOperation('todo.json') as string;
    console.log(todoList);
    res.send(readFile('todo.json'));
});


app.post('/toggle', function(req,  res){
    const id: number = parseInt(req.body.id);

    fileOperation('todo.json', function(todoList:ITodoData[]){
        return todoList.map((todo: ITodoData) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }

            return todo;
        });
    });

    res.send({
        msg:'ok',
        statusCode:200
    })

});

app.post('/remove', function(req,  res){
    const id: number = parseInt(req.body.id);

    // let todoList:ITodoData[] = JSON.parse(readFile('todo.json') || '[]');

    // todoList = todoList.filter((todo:ITodoData) => todo.id !== id);

    // writeFile('todo.json', todoList);

    fileOperation('todo.json', function(todolist : ITodoData[]){
        return todolist.filter((todo:ITodoData) => todo.id !== id)
    });

    res.send({
        msg:'ok',
        statusCode:'200'
    });

});

app.post('/add', function(req,  res){
    const todo:ITodoData = JSON.parse(req.body.todo);

    fileOperation('todo.json', function(todoList:ITodoData[]){
        // const isExist  = todoList.find((t:ITodoData) => t.content === todo.content);
        const isExist  = todoList.filter((t:ITodoData) => t.content === todo.content);
console.log(isExist);
        if(!isExist.length){
            res.send({
                msg:'exist',
                statusCode:100
            });
            return;
        }

        todoList.push(todo);
        return todoList;
    });

    res.send({
        msg:'ok',
        statusCode: 200
    })

});

app.listen(8080, function(){
    console.log('welcome to Express');
    console.log('listening on port 8080');
});