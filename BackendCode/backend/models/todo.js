const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    }
});

const ToDo = mongoose.model("todo", ToDoSchema);

module.exports = ToDo;