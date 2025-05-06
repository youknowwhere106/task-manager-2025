const db = require("../models");
const Task = db.tasks;

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Title cannot be empty!"
    });
    return;
  }

  // Create a Task
  const task = {
    title: req.body.title,
    description: req.body.description,
    is_completed: req.body.is_completed ? req.body.is_completed : false
  };

  // Save Task in the database
  Task.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Task."
      });
    });
};

// Retrieve all Tasks from the database
exports.findAll = (req, res) => {
  Task.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks."
      });
    });
};

// Mark a task as completed by the id in the request
exports.complete = (req, res) => {
  const id = req.params.id;

  Task.update({ is_completed: true }, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was marked as completed successfully."
        });
      } else {
        res.send({
          message: `Cannot mark Task with id=${id} as completed. Maybe Task was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      });
    });
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      });
    });
};
