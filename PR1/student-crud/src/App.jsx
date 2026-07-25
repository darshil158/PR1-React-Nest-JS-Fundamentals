import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [student, setStudent] = useState({
    name: "",
    city: "",
    state: "",
    country: "",
    course: "",
  });

  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const data = localStorage.getItem("students");

    if (data) {
      setStudents(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      student.name === "" || student.city === "" || student.state === "" || student.country === "" || student.course === ""
    ) {
      alert("Fill all Details");
      return;
    }

    if (editIndex === -1) {
      setStudents([...students, student]);
    } 
    else {
      const newStudents = [...students];
      newStudents[editIndex] = student;
      setStudents(newStudents);
      setEditIndex(-1);
    }

    setStudent({
      name: "",
      city: "",
      state: "",
      country: "",
      course: "",
    });
  }

  function editStudent(index) {
    setStudent({ ...students[index] });
    setEditIndex(index);
  }

  function deleteStudent(index) {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  }

  return (
    <div className="container">
      <h1>Student Information Manager</h1>

      <StudentForm
        student={student}
        setStudent={setStudent}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />

      <h2>Student List</h2>

      <div className="card-container">
        {students.map((item, index) => (
          <StudentCard
            key={index}
            student={item}
            onEdit={() => editStudent(index)}
            onDelete={() => deleteStudent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
