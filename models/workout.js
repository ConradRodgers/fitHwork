let mongoose = require("mongoose");
var Schema = mongoose.Schema;
var workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: [true, "Proved type of exercise"],
      },
      name: { type: String, trim: true, required: [true, "Proved Name"] },
      duration: { type: Number, required: [true, "Proved time in minutes"] },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
