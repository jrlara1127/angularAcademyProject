
import * as express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseByUrl} from "./get-courses.route";
import {searchLessons} from "./search-lessons.route";
import {saveCourse} from './save-course.route';
import {loginUser} from './login.route';
import {findLessonDetail} from "./get-lesson-detail.route";  

import { getAllStudents, getStudentById, saveStudent, updateStudent } from './services/students.route';
import { getAllCoursesv2, getCourseV2ById, saveCourses, updateCourse } from './services/courses.route';
import { getAllProjects, getProjecTById, saveProject, updateProject } from './services/projects.route';
import { getAllStudentsByCourse, getAllStudentsByProject, saveCourseStudent, saveProjectStudent } from './services/studentsRelations.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());

app.route('/api/v2/courses').get(getAllCourses);

app.route('/api/v2/courses/:id').get(getCourseByUrl);

app.route('/api/lessons').get(searchLessons);

app.route('/api/v2/courses/:id').put(saveCourse);

app.route('/api/login').post(loginUser);

app.route('/api/lesson-details').get(findLessonDetail);

// Students
app.route('/api/students').get(getAllStudents);
app.route('/api/students/:id').get(getStudentById);
app.route('/api/students').post(saveStudent);
app.route('/api/students').put(updateStudent);

// Courses
app.route('/api/courses').get(getAllCoursesv2);
app.route('/api/courses/:id').get(getCourseV2ById);
app.route('/api/courses').post(saveCourses);
app.route('/api/courses').put(updateCourse);

// Projects
app.route('/api/projects').get(getAllProjects);
app.route('/api/projects/:id').get(getProjecTById);
app.route('/api/projects').post(saveProject); 
app.route('/api/projects').put(updateProject);

// Students by Courses 
app.route('/api/courses/students/:id').get(getAllStudentsByCourse);
app.route('/api/courses/students').post(saveCourseStudent);

// Student by Projects
app.route('/api/projects/students/:id').get(getAllStudentsByProject);
app.route('/api/projects/students').post(saveProjectStudent);


const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



