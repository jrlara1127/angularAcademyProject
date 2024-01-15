export interface Student {
    id: number | null; 
    name?: string | null | undefined;
    age?: number;
    email?: string | null | undefined;
    scholarYear?: number;
    contactNumber?: string | null | undefined
    birthDate?: Date;
    creationDate: Date;

}

export const STUDENT_COLUMNS: any[] = [
    { name:'ID',
      column:'id'
    },
    { name:'Name',
      column:'name'
    },
    { name:'Age',
      column:'age'
    },
    { name:'Email',
      column:'email'
    },
    { name:'Scholar Year',
      column:'scholarYear'
    },
    { name:'Contact Number',
      column:'contactNumber'
    },
    { name:'Birth date',
      column:'birthDate',
      type:'date'
    }
  ];

  
export const STUDENTS: Array<Student> = [
    {
      id: 1,
      name: "John Doe",
      age: 21,
      email: "john.doe@example.com",
      scholarYear: 3,
      contactNumber: '1234567890',
      birthDate: new Date("1995-08-15"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 2,
      name: "Alice Smith",
      age: 22,
      email: "alice.smith@example.com",
      scholarYear: 4,
      contactNumber: '9876543210',
      birthDate: new Date("1994-11-23"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 20,
      email: "bob.johnson@example.com",
      scholarYear: 2,
      contactNumber: '5555555555',
      birthDate: new Date("1996-05-10"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 4,
      name: "Emily Brown",
      age: 19,
      email: "emily.brown@example.com",
      scholarYear: 1,
      contactNumber: '9999999999',
      birthDate: new Date("1997-02-28"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 5,
      name: "Michael Wilson",
      age: 21,
      email: "michael.wilson@example.com",
      scholarYear: 3,
      contactNumber: '1231231234',
      birthDate: new Date("1995-09-08"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 6,
      name: "Sophia Davis",
      age: 22,
      email: "sophia.davis@example.com",
      scholarYear: 4,
      contactNumber: '5551212121',
      birthDate: new Date("1994-12-17"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 7,
      name: "Ethan Martinez",
      age: 20,
      email: "ethan.martinez@example.com",
      scholarYear: 2,
      contactNumber: '7778889999',
      birthDate: new Date("1996-06-30"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 8,
      name: "Olivia Miller",
      age: 19,
      email: "olivia.miller@example.com",
      scholarYear: 1,
      contactNumber: '4443332222',
      birthDate: new Date("1997-03-15"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 9,
      name: "Daniel Garcia",
      age: 21,
      email: "daniel.garcia@example.com",
      scholarYear: 3,
      contactNumber: '6666666666',
      birthDate: new Date("1995-10-22"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
    {
      id: 10,
      name: "Ava Brown",
      age: 22,
      email: "ava.brown@example.com",
      scholarYear: 4,
      contactNumber: '9876543210',
      birthDate: new Date("1994-11-05"),
      creationDate: new Date("2024-01-15T00:00:00.000Z"),
    },
  ];
  
  
  