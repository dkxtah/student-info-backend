import { students } from "../config/database.js";
import { getStudentMissingFields } from "../utils/helper.js";

export const validateFields = (req, res, next) => {
  const missingFields = getStudentMissingFields(req.body);

  if (missingFields) {
    const [field] = missingFields;

    return res.status(400).json({
      message: `${field} is required`,
    });
  }

  next();
};

export const findStudent = (req, res, next) => {
  const studentIndex = students.findIndex((student) => {
    return student.id === req.params.id;
  });

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  req.studentIndex = studentIndex;
  req.student = students[studentIndex];

  next();
};
