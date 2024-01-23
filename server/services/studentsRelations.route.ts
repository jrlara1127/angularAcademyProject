

import {Request, Response} from 'express';
import { STUDENTBYCOURSES, STUDENTBYPROJECTS, STUDENTS, saveCourseStudentlst, saveProjectStudentlst } from '../db/db-data-class';




export function getAllStudentsByCourse(req: Request, res: Response) {    
    const id = req.params["id"];
    const students:any[] = Object.values(STUDENTBYCOURSES);

    var studentsLst: any[] = [];

    try {
        students.forEach((element)=>{
            if(element['idCourse'] == id){
                let student = STUDENTS.find(student => student['id'] == element['idStudent']);
                studentsLst.push(student);
            }
        });

    }catch{
        studentsLst = [];
    }
    
    setTimeout(() => {
        if (studentsLst.length > 0){
            res.status(200).json({payload:[...studentsLst]});
        } else{
            res.status(200).json({payload:[],error: "Students not found"});
        }
    }, 1000);

} 

export function getAllStudentsByProject(req: Request, res: Response) {    
    const id = req.params["id"];
    const students:any[] = Object.values(STUDENTBYPROJECTS);

    var studentsLst: any[] = [];

    try {
        students.forEach((element)=>{
            if(element['idProject'] == id){
                let student = STUDENTS.find(student => student['id'] == element['idStudent']);
                studentsLst.push(student);
            }
        });

    }catch{
        studentsLst = [];
    }
    
    setTimeout(() => {
        if (studentsLst.length > 0){
            res.status(200).json({payload:[...studentsLst]});
        } else{
            res.status(200).json({payload:[],error: "Students not found"});
        }
    }, 1000);

} 



export function saveCourseStudent(req: Request, res: Response) {

    const changes = req.body;
    var newStudent = {...changes};
   
    var response:Boolean = saveCourseStudentlst(newStudent);

    setTimeout(() => {     
        if (response){
          res.status(200).json({success: true, details: 'The student was registred successfully on the course.'});
        } else{
          res.status(300).json({success: false, details:"It wasn't possible registred the student on the course."});
        }
    }, 1000);

}

export function saveProjectStudent(req: Request, res: Response) {

    const changes = req.body;
    var newStudent = {...changes};
   
    var response:Boolean = saveProjectStudentlst(newStudent);

    setTimeout(() => {     
        if (response){
            res.status(200).json({success: true, details: 'The student was registred successfully on the project.'});
          } else{
            res.status(300).json({success: false, details:"It wasn't possible registred the student on the project."});
        }
    }, 1000);

}