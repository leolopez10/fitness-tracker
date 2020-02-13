//Requiring path
const path = require("path")

//Routes for html pages
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //exercise route
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    //stats route
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../path/stats.html"));
    });


};