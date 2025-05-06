module.exports = app => {
    const tasks = require("../controllers/task.controller.js");
    const router = require("express").Router();
  
    // Create a new Task
    router.post("/", tasks.create);
  
    // Retrieve all Tasks
    router.get("/", tasks.findAll);
  
    // Mark a task as completed
    router.put("/:id/complete", tasks.complete);
  
    // Delete a Task with id
    router.delete("/:id", tasks.delete);
  
    app.use('/tasks', router);
  };
  
