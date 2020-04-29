var Workout = require("../models/workout.js");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.find().then((data) => {
    res.json(data);
  });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({}).then((data) => {
    res.json(data);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  }).then((data) => {
    res.json(data);
  });
});

module.exports = router;
