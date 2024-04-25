import * as dao from "./dao.js";
export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };
  app.post("/api/quizzes", createQuiz);

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };
  app.put("/api/quizzes/:quizId", updateQuiz);

  const findAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
  };
  app.get("/api/quizzes", findAllQuizzes);

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.id);
    res.json(status);
  };
  app.delete("/api/quizzes/:id", deleteQuiz);

  const getQuizByTitle = async (req, res) => {
    const quiz = await dao.findQuizByTitle(req.params.title);
    res.json(quiz);
  };
  app.get("/api/quizzes/title/:title", getQuizByTitle);

  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.id);
    res.json(quiz);
  };
  app.get("/api/quizzes/:id", findQuizById);

  const getQuizQuestionById = async (req, res) => {
    const quiz = await dao.findQuizQuestionById(req.params.questionId);
    res.json(quiz);
  };
  app.get("/api/quizzes/questions/:questionId", getQuizQuestionById);

  // Given a new question, adds that question for the specified quiz and returns the new question id
  const createQuestion = async (req, res) => {
    try {
      const { quizId } = req.params;
      const question = req.body;
      const newQuestion = await dao.createQuestion(quizId, question);
      res.json({ questionId: newQuestion._id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  app.post("/api/quizzes/:quizId/questions", createQuestion);

  // Given a quiz id, updates the quiz with the new questions data
  const updateQuestion = async (req, res) => {
    try {
      const { quizId } = req.params;
      const questions = req.body;
      const quiz = await dao.updateQuestion(quizId, questions);
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  app.put("/api/quizzes/:quizId/questions", updateQuestion);

  const deleteQuizQuestion = async (req, res) => {
    try {
      const { quizId, questionId } = req.params;
      const quiz = await dao.deleteQuizQuestion(quizId, questionId);
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  app.delete("/api/quizzes/:quizId/questions/:questionId", deleteQuizQuestion);
}
