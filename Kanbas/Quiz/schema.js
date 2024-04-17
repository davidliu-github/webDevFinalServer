import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    quizType: {
      type: String,
      enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
      default: "GRADED_QUIZ",},
    points: Number,
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes",},
    shuffleAnswers: {type:String, default: "Yes"},
    timeLimit: {type:Number, default: 20},
    multipleAttempts: {type:String, default: "No"},
    showCorrectAnswers: {type:Boolean, default: false},
    accessCode: {type:String, required: true, default: ""},
    oneQuestionAtATime: {type:String, default: "Yes"},
    webcamRequired: {type:String, default: "No"},
    lockQuestion: {type:String, default: "No"},
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
  },
  { collection: "quiz" });
export default quizSchema;