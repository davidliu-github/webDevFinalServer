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
}
