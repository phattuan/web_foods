/**
 * Created by trungquandev.com's author.
 */
 import express from 'express';
 import path from 'path';
 const app = express()

app.set('view engine', 'ejs');
app.set('views',path.resolve(__dirname, '../src/views'));

app.get('/', function(req, res){
    res.render('home');
}).listen('4400')