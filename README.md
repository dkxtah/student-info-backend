# Student Info Backend

Simple REST API for managing student records using **Node.js** and **Express**. Data stored in memory, making project suitable for learning Express routing, middleware, controllers, and CRUD operations.

## Features

- Create student
- Get all students
- Get student by ID
- Update student
- Delete student
- Request validation middleware
- Error handling
- Modular project structure

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)

## Project Structure

```text
student-info-backend/
├── src
│   ├── config
│   │   └── database.js
│   ├── controllers
│   │   └── student.controller.js
│   ├── middleware
│   │   └── validateStudent.js
│   ├── routes
│   │   └── student.route.js
│   ├── utils
│   │   └── helper.js
│   ├── app.js
│   └── index.js
├── package.json
└── README.md
```
## Postman docs

[Postman documentation link](https://www.postman.com/workspace/student-info-backend~882df068-4ded-47dc-802b-aad0c51584b1/collection/37454379-7839f43b-3745-4ea8-9970-9bcc766260a7)


## Installation

Clone repository

```bash
git clone https://github.com/dkxtah/student-info-backend.git
```

Move into project

```bash
cd student-info-backend
```

Install dependencies

```bash
npm install
```

## Running Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server starts on configured port.

## API Endpoints

### Get all students

```http
GET /students/getAll
```

### Get student by ID

```http
GET /students/getStudentById/:id
```

### Create student

```http
POST /students/create
```

Example request body

```json
{
    "firstName": "Ebiere",
    "lastName": "Clinton",
    "email": "eclinton@yopmail.com",
    "age": 20,
    "gender": "Male",
    "studentId": "STUDENT001",
    "course": "Computer science",
    "level": 200
}
```

### Update student

```http
PUT /students/update/:id
```

### Delete student

```http
DELETE /students/delete/:id
```

## Example Response

```json
{
  "message": "Student created successfully!",
  "data": {
    "firstName": "Ebiere",
    "lastName": "Clinton",
    "email": "eclinton@yopmail.com",
    "age": 20,
    "gender": "Male",
    "studentId": "STUDENT001",
    "course": "Computer science",
    "level": 200,
    "id": "1234567"
  }
}
```

## Status Codes

- `200` OK
- `201` Created
- `400` Bad Request
- `404` Not Found
- `500` Internal Server Error

## Learning Objectives

Project demonstrates:

- Express routing
- Controllers
- Middleware
- CRUD operations
- Request validation
- Modular folder structure
- REST API design

## Future Improvements

- Replace in-memory data with MongoDB
- Add Mongoose models
- Environment variables with `.env`
- Authentication and authorization
- Pagination and filtering
- Unit and integration tests
- API documentation with Swagger

## License

This project is licensed under the MIT License.
