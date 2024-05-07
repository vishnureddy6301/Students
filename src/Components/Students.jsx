import React ,{useState,useEffect}from 'react'

const Students = () => {
    const [studentsData,setStudentsData]=useState([]);
    useEffect(()=>{
        const Data=[
        {name:"vishnu",age:22,course:"React",marks:92,grade:"A"},
        {name:"Hemanth",age:26,course:"Java",marks:80,grade:"B"},
        {name:"Mahesh",age:21,course:"C",marks:45,grade:"F"},
        {name:"Hari",age:25,course:"Python",marks:30,grade:"F"},
        {name:"Sai",age:23,course:"C#.net",marks:79,grade:"B"},
            
        ];
        setStudentsData(Data);
 },[] );
 const studentsWithHighMarksAndGradeA = studentsData.filter(
    (student) => student.marks > 90 && student.grade === "A"
  );
  const studentsWithLowMarksAndGradeF = studentsData.filter(
    (student) => student.marks < 50 && student.grade === "F"
  );
  const averageStudents = studentsData.filter(
    (student) => student.marks >= 50 && student.marks <= 90 && student.grade === "B"
  );
  const totalMarks = studentsData.reduce((emp, student) => emp + student.marks, 0);
  //const sortedStudents = studentsData.sort((a, b) => a.marks - b.marks);
  const sortedStudents = studentsData.sort((a, b) => b.marks - a.marks);
  const studentsWithoutFGrade = studentsData.filter((student) => student.grade !== "F");


  return (
    <div>
      <h2>Students with marks greater than 90 and having an A grade:</h2>
      <ul>
        {studentsWithHighMarksAndGradeA.map((student, index) => (
          <li key={index}>
            {student.name}, {student.marks}, {student.grade}
          </li>
        ))}
      </ul>
       <h2>Students with marks less than 50 and having an F grade:</h2>
      <ul>
        {studentsWithLowMarksAndGradeF.map((student, index) => (
          <li key={index}>
            {student.name}, {student.marks}, {student.grade},{student.age}
          </li>
        ))}
      </ul>

      <h2>Average students with marks between 50 to 90 and having a B grade:</h2>
      <ul>
        {averageStudents.map((student, index) => (
          <li key={index}>
            {student.name}, {student.marks}, {student.grade}
          </li>
        ))}
      </ul>

      <h2>Total sum of all students' marks: {totalMarks}</h2>

      <h2>Students list sorted in ascending order by marks:</h2>
      <ul>
        {sortedStudents.map((student, index) => (
          <li key={index}>
            {student.name}, {student.marks}, {student.grade}
          </li>
        ))}
      </ul>

      <h2>Students list without F grade:</h2>
      <ul>
        {studentsWithoutFGrade.map((student, index) => (
          <li key={index}>
            {student.name}, {student.marks}, {student.grade}
          </li>
        ))}
      </ul>

    </div>
  )
}
 export default Students; 
