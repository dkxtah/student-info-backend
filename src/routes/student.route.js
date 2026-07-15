import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../controllers/student.controller.js";
import { findStudent, validateFields } from "../middleware/validateStudent.js";

const router = Router();

router.route("/getAll").get(getAllStudents);
router.route("/getStudentById/:id").get(findStudent, getStudentById);
router.route("/create").post(validateFields, createStudent);
router.route("/update/:id").put(validateFields, findStudent, updateStudent);
router.route("/delete/:id").delete(findStudent, deleteStudent);

export default router;
