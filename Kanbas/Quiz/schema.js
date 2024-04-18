import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    title: {type: String, required: true},
    quizType: {
      type: String,
      enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
      default: "GRADED_QUIZ",},
    points: Number,
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes",},
    shuffleAnswers: {type:Boolean, default: true},
    timeLimit: {type:Number, default: 20},
    multipleAttempts: {type:Boolean, default: false},
    showCorrectAnswers: {type:Boolean, default: false},
    accessCode: {type:String, required: true, default: ""},
    oneQuestionAtATime: {type:Boolean, default: true},
    webcamRequired: {type:Boolean, default: false},
    lockQuestion: {type:Boolean, default: false},
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    published: {type:Boolean, default: false},
    questions: Number,
  },
  { collection: "quizzes" });
export default quizSchema;