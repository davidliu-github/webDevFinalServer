import model from "./model.js";
export const createQuiz = (quiz) =>  {     
    delete quiz._id     
    return model.create(quiz); };
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const findQuizById = (quizId) =>  model.findById(quizId);
export const findAllQuizzes = () => model.find();


// export const findAllUsers = () => model.find();
// export const findUserById = (userId) => model.findById(userId);
// export const findUserByUsername = (username) =>  model.findOne({ username: username });
// export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
// export const deleteUser = (userId) => model.deleteOne({ _id: userId });
