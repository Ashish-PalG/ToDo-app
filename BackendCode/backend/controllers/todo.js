const ToDo = require("../models/todo");

exports.getAllTodo = (req, res) => {
    ToDo.find()
        .then((todo) => res.json(todo))
        .catch((err) => 
            res.status(404).json({ message: "Todo not found", error: err.message })
        );
};

exports.postCreateTodo = (req, res) => {
    ToDo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) => 
            res.status(400).json({ message: "Failed to add Todo", error: err.message})
        );
};

exports.putUpdateTodo = (req, res) => {
    ToDo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "Todo updated successfully", data }))
        .catch((err) => 
            res.status(400).json({ message: "Failed to update Todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    ToDo.findByIdAndRemove(req.params.id, req.body)
        .then((data) => res.json({ message: "Todo deleted successfully", data }))
        .catch((err) =>
            res.status(404).json({ message: "book not found", error: err.message })
        );
};