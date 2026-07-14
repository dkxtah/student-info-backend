import { students } from "../config/database.js";

const createStudent = (req, res) => {
  try {
    const newEntries = { ...req.body, id: Date.now().toString() };
    students.push(newEntries);
    return res
      .status(201)
      .json({ message: "Student created successfully!", data: newEntries });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getAllStudents = (req, res) => {
  try {
    return res.status(200).json({
      message: "Students retreived successfully",
      data: students,
      total: students.length,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getStudentById = (req, res) => {
  try {
    return res.status(200).json({
      message: "Student retrieved successfully",
      data: req.student,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const updateStudent = (req, res) => {
  const { id } = req.params;

  try {
    const newStudent = { ...req.body, id };
    students[req.studentIndex] = newStudent;

    return res.status(200).json({
      message: "Student updated successfully",
      data: newStudent,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const deleteStudent = (req, res) => {
  try {
    const deletedStudent = students.splice(req.studentIndex, 1);

    return res.status(200).json({
      message: "Student deleted successfully",
      data: deletedStudent[0],
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
