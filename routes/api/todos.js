const express = require("express");
const router = express.Router();
const passport = require("passport");

const Todo = require("../../models/Todo");

// @route GET api/todos/:id
// @desc Get todos for specific project
// @access Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;

    Todo.find({ project: id }).then(todos => res.json(todos));
  }
);

// @route POST api/todos/create
// @desc Create a new todo
// @access Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const NEW_TODO = new Todo({
      todoTitle: req.body.todoTitle,
      priority: req.body.priority,
      dueDate: req.body.dueDate,
      description: req.body.description
    });

    NEW_TODO.save()
      .then(todo => res.json(todo))
      .catch(err => console.log(err));
  }
);

// @route POST api/todos/delete
// @desc Delete an existing todo
// @access Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Todo.findById(req.params.id).then(todo => {
      todo.remove().then(() => res.json({ success: true }));
    });
  }
);

// @route PATCH api/todos/update
// @desc Update an existing todo
// @access Private
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let todoFields = {};

    todoFields.todoTitle = req.body.todoTitle;
    if (req.body.dueDate && req.body.dueDate !== "Date undefined") {
      todoFields.dueDate = req.body.dueDate;
    }
    todoFields.description = req.body.description;

    Todo.findOneAndUpdate(
      { _id: req.body.id },
      { $set: todoFields },
      { new: true }
    )
      .then(todo => {
        res.json(todo);
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
