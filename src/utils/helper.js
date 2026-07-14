export const getStudentMissingFields = (req) => {
  const { firstName, lastName, email, age, gender, studentId, course, level } =
    req;
  const entries = {
    firstName,
    lastName,
    email,
    age,
    gender,
    studentId,
    course,
    level,
  };

  const missingFields = Object.entries(entries).find(([, value]) => !value);
  return missingFields;
};
