const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const server = express();
const Todo = require('./models/Todo');
mongoose.connect('mongodb://localhost:27017/TodosApp');
server.use('/static', express.static('static'));
server.use(bodyParser.json());


server.get('/', function (request, response) {
    response.sendFile(__dirname + "/static/index.html");
});
// put routes here
server.get('/api/todos', async (request, response) => {
    var todos = await Todo.find();
    return response.json(todos);
});
server.post('/api/todos', async (request, response) => {
    var todo = await Todo.create({ title: request.body.title, order: request.body.order });
    todo.save();
    return response.json(todo);
});
server.get('/api/todos/:id', (request, response) => {
    let id = request.params.id;
    let todo = todos.find(todo => todo._id === _id);
    if (!todo) {

        response.status(404);
        return response.end();
    }
    return response.json(todo);
});
server.put('/api/todos/:id', async (request, response) => {
    var id = request.params.id;
    var todos = request.body;
    var existing = await Todo.findOne({ _id: request.params.id });
    existing.name = todos.name;
    existing.completed = todos.completed;
    existing.save();
    return response.json(existing);
});
server.delete('/api/todos/:id', async (request, response) => {
    let id = parseInt(request.params.id);
    var todo = await Todo.findOne({ _id: request.params.id });
    var todoAway = await Todo.deleteOne({ _id: request.params.id });


});
server.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});