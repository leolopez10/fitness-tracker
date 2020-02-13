//Require model
const db = require("../models");

//Routes for API workout
module.exports = function(app) {

    //GET route for all of the workouts
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    //POST route to post into workouts
    app.post("/api/workouts", function(req, res) {
        const workout = new db.Workout();
        db.Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    //PUT route for new exercises added to workout
    app.put("/api/workouts/:id", function(req, res) {
        console.log(req.body);
    })



}