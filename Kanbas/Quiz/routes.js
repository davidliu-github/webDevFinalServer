import * as dao from "./dao.js";
export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
   };
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    currentQuiz= await dao.findQuizById(quizId);
    res.json(status);
   };
  const findAllQuizzes = async (req, res) => { 
    // const quizzes = await dao.findAllQuizzes();
    res.send({"_id": "RS102"})
  };


//   const deleteUser = async (req, res) => { };
//   const findAllUsers = async (req, res) => { };
//   const findUserById = async (req, res) => { };
//   const signup = async (req, res) => { };
//   const signin = async (req, res) => { };
//   const signout = (req, res) => { };
//   const profile = async (req, res) => { };
  app.post("/api/quiz", createQuiz);
  app.put("/api/quiz/:quizId", updateQuiz);
  app.get("/api/quizzes", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });

//   app.get("/api/users", findAllUsers);
//   app.get("/api/users/:userId", findUserById);
//   app.put("/api/users/:userId", updateUser);
//   app.delete("/api/users/:userId", deleteUser);
//   app.post("/api/users/signup", signup);
//   app.post("/api/users/signin", signin);
//   app.post("/api/users/signout", signout);
//   app.post("/api/users/profile", profile);
}

import Database from "../Database/index.js";
export default function CourseRoutes(app) {
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses
      .filter((c) => c._id !== id);
    res.sendStatus(204);
  });
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });
  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses
      .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

}
