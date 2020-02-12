const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Sets up port for server, either on Heroku or localhost:3000.
const PORT = process.env.PORT || 3000;

// This requires all of our models from the models folder.
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// MongoDB_URI referenced in .env
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

// Require the routes so the app knows what to load
require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on http://localhost${PORT}`);
});