

import {Request, Response} from 'express';
import { COURSES, PROJECTS, STUDENTS, saveStudentlst, updateStudentLst } from '../db/db-data-class';



export function getAllStudents(req: Request, res: Response) {
        setTimeout(() => {
             res.status(200).json({payload:Object.values(STUDENTS)});
        }, 400);
} 

export function getStudentById(req: Request, res: Response) {
    const id = req.params["id"];
    const students:any = Object.values(STUDENTS);
    let student:any;

    try {
        student = students.find((student:any) => student.id == id);
    }catch{
        student = null;
    }
    
    setTimeout(() => {
        if (student){
            res.status(200).json(student);
        } else{
            res.status(400).json({error: "Student not found"});
        }
    }, 1000);
}


export function saveStudent(req: Request, res: Response) {

    const changes = req.body;
    const newStudent = {...changes};

    const maxIdStudent:any = STUDENTS.reduce((maxStudent,currentStudent)=>{
                    return currentStudent.id && maxStudent.id && currentStudent.id > maxStudent.id ? currentStudent: maxStudent
                  },STUDENTS[0]);
    
    newStudent['id'] = maxIdStudent['id']+1;    
    
    var response:Boolean = saveStudentlst(newStudent);

    setTimeout(() => {     
        if (response){
          res.status(200).json({success: true, details: 'The new student was saved successfully. '});
        } else{
          res.status(300).json({success: false, details:"It wasn't possible save the new Student"});
        }
    }, 1000);

}


export function updateStudent(req: Request, res: Response) {

    const changes = req.body;
    const studentUpdate = {...changes};

    const response:boolean = updateStudentLst(studentUpdate);

    setTimeout(() => {
        if (response){
            res.status(200).json({success: true, details: 'The student was updated successfully.'}); 
        }  else {
            res.status(200).json({success: true, details: 'It was not possible update the student.'});
        }
    }, 1000);

}