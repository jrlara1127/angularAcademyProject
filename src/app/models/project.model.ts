export interface Project {
    id: number;
    name: string;
    description:string;
    instructor:string;
    startDate: Date;
    endDate: Date;
    numStudents:number;
}

export const PROJECT_COLUMNS: any[] = [
  { name:'ID',
    column:'id'
  },
  { name:'Name',
    column:'name'
  },
  { name:'Description',
    column:'description',
    type:'longDescription'
  },
  { name:'Instructor',
    column:'instructor'
  },
  { name:'Start date',
    column:'startDate',
    type:'date'
  },
  { name:'End date',
    column:'endDate',
    type:'date'
  },
  { name:'Num Students',
    column:'numStudents'
  },
  { name:' ',
    column:'selection',
    type:'selection'
  }
];


/*
export const PROJECTS: Array<Project> = [
    {
      id: 1,
      name: "Science Fair Project",
      description: "Investigate a scientific question and present findings at the school's science fair.",
      startDate: new Date("2023-02-01"),
      endDate: new Date("2023-05-31"),
      numStudents: 3,
    },
    {
      id: 2,
      name: "Community Service Initiative",
      description: "Organize and participate in a community service project to make a positive impact on the local community.",
      startDate: new Date("2023-03-15"),
      endDate: new Date("2023-06-15"),
      numStudents: 5,
    },
    {
      id: 3,
      name: "Mathematics Olympiad Preparation",
      description: "Prepare for and participate in a regional mathematics olympiad competition.",
      startDate: new Date("2023-01-10"),
      endDate: new Date("2023-04-30"),
      numStudents: 4,
    },
    {
      id: 4,
      name: "Environmental Awareness Campaign",
      description: "Raise awareness about environmental issues and implement initiatives to promote sustainability in the school.",
      startDate: new Date("2023-04-01"),
      endDate: new Date("2023-07-31"),
      numStudents: 6,
    },
    {
      id: 5,
      name: "Art Exhibition",
      description: "Plan and organize an art exhibition featuring student artwork from various mediums.",
      startDate: new Date("2023-02-20"),
      endDate: new Date("2023-06-30"),
      numStudents: 4,
    },
    {
      id: 6,
      name: "Robotics Club Project",
      description: "Design and build a robot to compete in a regional robotics competition.",
      startDate: new Date("2023-05-01"),
      endDate: new Date("2023-10-31"),
      numStudents: 8,
    },
    {
      id: 7,
      name: "History Research Project",
      description: "Conduct historical research on a specific topic and present findings to the school community.",
      startDate: new Date("2023-08-15"),
      endDate: new Date("2024-01-15"),
      numStudents: 5,
    },
    {
      id: 8,
      name: "Health and Wellness Workshop",
      description: "Organize a workshop on health and wellness, covering topics such as nutrition and mental health.",
      startDate: new Date("2023-11-01"),
      endDate: new Date("2024-03-31"),
      numStudents: 6,
    },
  ];

  */
  