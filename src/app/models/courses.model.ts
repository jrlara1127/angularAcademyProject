export class Courses {
    id?: number;
    name?: String;
    instructor?: string;
    hours?: number;
    creditHours?: number;
    numStudents?: number;

    constructor() { }
}

export const COURSE_COLUMNS: any[] = [
    { name:'ID',
      column:'id'
    },
    { name:'Name',
      column:'name'
    },
    { name:'Instructor',
      column:'instructor'
    },
    { name:'Hours',
      column:'hours'
    },
    { name:'Cretit Hours',
      column:'creditHours'
    },
    { name:'Students',
      column:'numStudents'
    }
  ];

export const COURSES: Array<Courses> = [
    { id: 1, name: "Introduction to Computer Science", instructor: "Professor Smith", hours: 30, creditHours: 3, numStudents: 20 },
    { id: 2, name: "Algebra I", instructor: "Teacher Johnson", hours: 45, creditHours: 4, numStudents: 25 },
    { id: 3, name: "Biology Basics", instructor: "Dr. Davis", hours: 35, creditHours: 3, numStudents: 18 },
    { id: 4, name: "English Literature", instructor: "Ms. White", hours: 40, creditHours: 4, numStudents: 22 },
    { id: 5, name: "History of World Civilizations", instructor: "Professor Brown", hours: 50, creditHours: 5, numStudents: 30 },
    { id: 6, name: "Chemistry Fundamentals", instructor: "Dr. Martinez", hours: 35, creditHours: 3, numStudents: 15 },
    { id: 7, name: "Physical Education", instructor: "Coach Garcia", hours: 20, creditHours: 2, numStudents: 15 },
    { id: 8, name: "Spanish Language", instructor: "Señorita Miller", hours: 40, creditHours: 4, numStudents: 20 },
];

