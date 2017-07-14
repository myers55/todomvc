const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({

    title: {type: String , required: true},
    order:  Number,
    completed: {type: Boolean, default: false}

});


const todos = mongoose.model("todos" ,todosSchema);

module.exports = todos;