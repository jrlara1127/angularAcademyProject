

import {Request, Response} from 'express';
import { COURSES, PROJECTS, STUDENTS, saveProjectlst, updateCourseLst } from '../db/db-data-class';
 

export function getAllCoursesv2(req: Request, res: Response) {
    setTimeout(() => {
         res.status(200).json({payload:Object.values(COURSES)});
    }, 400);
}
  
export function getCourseV2ById(req: Request, res: Response) {
    const id = req.params["id"];
    const courses:any = Object.values(COURSES);
    let course:any;

    try {
        course = courses.find(student => student.id == id);
    }catch{
        course = null;
    }
    
    setTimeout(() => {
        if (course){
            res.status(200).json(course);
        } else{
            res.status(400).json({error: "Course not found"});
        }
    }, 1000);
}
 

export function saveCourses(req: Request, res: Response) {

    const changes = req.body;
    var newCourse = {...changes};

    const maxId:any = COURSES.reduce((following,current)=>{
                    return current.id && following.id && current.id > following.id ? current: following
                  },COURSES[0]);
    
    newCourse['id'] = maxId['id']+1;    
    console.log("Saving student changes", newCourse);
    var response:Boolean = saveProjectlst(newCourse);

    setTimeout(() => {     
        if (response){
          res.status(200).json({success: true, details: 'The new course was saved successfully. '});
        } else{
          res.status(300).json({success: false, details:"It wasn't possible save the new Course"});
        }
    }, 1000);

}


export function updateCourse(req: Request, res: Response) {

    const changes = req.body;
    const courseUpdate = {...changes};

    const response:boolean = updateCourseLst(courseUpdate);

    setTimeout(() => {
        if (response){
            res.status(200).json({success: true, details: 'The course was updated successfully.'}); 
        }  else {
            res.status(200).json({success: true, details: 'It was not possible update the course.'});
        }
    }, 1000);

}