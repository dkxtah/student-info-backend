import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../controllers/student.controller.js";
import { findStudent, validateStudent } from "../middleware/validateStudent.js";

const router = Router();

router.route("/").get(getAllStudents);
router.route("/:id").get(findStudent, getStudentById);
router.route("/create").post(validateStudent, createStudent);
router.route("/update/:id").put(validateStudent, findStudent, updateStudent);
router.route("/delete/:id").delete(findStudent, deleteStudent);

export default router;
