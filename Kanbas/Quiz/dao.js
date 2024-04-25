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
  model.findOne({
    "questions._id": questionId,
  });
export const createQuestion = async (quizId, question) => {
  const updatedQuiz = await model.findOneAndUpdate(
    { _id: quizId },
    { $push: { questions: question } },
    { new: true }
  );
  const newQuestion = updatedQuiz.questions[updatedQuiz.questions.length - 1];
  return newQuestion;
};
export const updateQuestion = async (quizId, questions) => {
  const updatedQuiz = await model.findOneAndUpdate(
    { _id: quizId },
    { questions: questions },
    { new: true }
  );
  return updatedQuiz;
};
export const deleteQuizQuestion = async (quizId, questionId) => {
  const updatedQuiz = await model.findOneAndUpdate(
    { _id: quizId },
    { $pull: { questions: { _id: questionId } } },
    { new: true }
  );
  return updatedQuiz;
};
