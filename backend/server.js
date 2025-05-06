const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Database connection
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Task Manager application." });
});

// Routes
require("./routes/task.routes")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

