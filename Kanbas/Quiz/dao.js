import model from "./model.js";
export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};
export const updateQuiz = (quizId, quiz) =>
  model.findOneAndUpdate({ _id: quizId }, quiz);
export const findQuizById = (quizId) => model.findById(quizId);
export const findAllQuizzes = () => model.find();
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });
export const findQuizByTitle = (title) => model.findOne({ title: title });
export const findQuizQuestionById = (questionId) =>
  model.find({
    "questions._id": questionId,
  });
export const createQuestion = (quizId, question) =>
  model.updateOne({ _id: quizId }, { $push: { questions: question } });
