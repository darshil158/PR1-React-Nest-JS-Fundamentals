import { useEffect, useState } from "react";

function StudentManager() {
  const [student, setStudent] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (
      student.name.trim() === "" ||
      student.city.trim() === "" ||
      student.state.trim() === "" ||
      student.country.trim() === "" ||
      student.course.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    setStudents([...students, student]);
    setStudent("");
  };

  const deleteStudent = (index) => {
    const updated = students.filter((i) => i !== index);
    setStudents(updated);
  };

  return (
    <div>
      <h2>Student List Management</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <ul>
        {students.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManager;
