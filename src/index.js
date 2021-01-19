// Imports
const express = require("express");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");

// Setup

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Get routes

app.get("/", (req, res) => {
  res.status(404).send("Invalid request");
});

app.get("/workouts", async (req, res) => {
  console.log("All workouts queried");
  const workouts = await prisma.workout.findMany();
  res.json(workouts);
});

app.get("/excercises", async (req, res) => {
  console.log("All excercises queried");
  const excercises = await prisma.excercises.findMany();
  res.json(excercises);
});

// Get specific workouts/excercises

app.get("/workout/:id", async (req, res) => {
  console.log(`Getting workout id ${req.params.id}`);
  const { id } = req.params;
  const workout = await prisma.workout.update({
    where: {
      id: parseInt(id),
    },
    data: { published: true },
  });
  res.json(workout);
});

app.get("/excercise/:id", async (req, res) => {
  console.log(`Getting excercise id ${req.params.id}`);
  const { id } = req.params;
  const excercise = await prisma.excercises.update({
    where: {
      id: parseInt(id),
    },
    data: { published: true },
  });
  res.json(excercise);
});

// Post routes

app.post("/workout", async (req, res) => {
  console.log("Post for workout");
  const { title, category, focus, excercises } = req.body;
  const result = await prisma.workout.create({
    data: {
      title,
      category,
      focus,
      excercises: { connect: { id: excercises } },
    },
  });
  res.json(result);
});

app.post("/excercise", async (req, res) => {
  console.log("Post for excercise");
  const { title, category, focus } = req.body;
  console.log(`Request: ${JSON.stringify(req.body)}`);
  const result = await prisma.workout.create({
    data: {
      title,
      category,
      focus,
    },
  });
  res.json(result);
});

// Let's go

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
