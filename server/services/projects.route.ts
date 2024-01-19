

import {Request, Response} from 'express';
import { COURSES, PROJECTS, STUDENTS, saveProjectlst, updateProjectLst } from '../db/db-data-class';


 

export function getAllProjects(req: Request, res: Response) {
    setTimeout(() => {
         res.status(200).json({payload:Object.values(PROJECTS)});
    }, 400);
}
 
export function getProjecTById(req: Request, res: Response) {
    const id = req.params["id"];
    const projects:any = Object.values(PROJECTS);
    let project:any;

    try {
        project = projects.find(student => student.id == id);
    }catch{
        project = null;
    }
    
    setTimeout(() => {
        if (project){
            res.status(200).json(project);
        } else{
            res.status(400).json({error: "Project not found"});
        }
    }, 1000);
}

export function saveProject(req: Request, res: Response) {

    const changes = req.body;
    const newProject = {...changes};

    const maxId:any = PROJECTS.reduce((following,current)=>{
                    return current.id && following.id && current.id > following.id ? current: following
                  },PROJECTS[0]);
    
    newProject['id'] = maxId['id']+1;    
    console.log("Saving project changes", newProject);
    var response:Boolean = saveProjectlst(newProject);

    setTimeout(() => {     
        if (response){
          res.status(200).json({success: true, details: 'The new project was saved successfully.'});
        } else{
          res.status(300).json({success: false, details:"It wasn't possible save the new Project"});
        }
    }, 1000);

}


export function updateProject(req: Request, res: Response) {

    const changes = req.body;
    const projectUpdate = {...changes};

    const response:boolean = updateProjectLst(projectUpdate);

    setTimeout(() => {
        if (response){
            res.status(200).json({success: true, details: 'The project was updated successfully.'}); 
        }  else {
            res.status(200).json({success: true, details: 'It was not possible update the project.'});
        }
    }, 1000);

}