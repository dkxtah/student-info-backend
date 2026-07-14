import express from "express";

const app = express();

app.use(express.json());

// routes import
import studentRouter from "./routes/student.route.js";

// routes declaration
app.use("/api/students", studentRouter);

export default app;
