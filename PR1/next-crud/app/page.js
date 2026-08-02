"use client";

import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

export default function Home() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Student Data")) || [];
    setStudents(data);
  }, []);

  const resetForm = () => {
    setName("");
    setCity("");
    setState("");
    setCountry("");
    setCourse("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = {
        ...updatedStudents[editIndex],
        name,
        city,
        state,
        country,
        course,
      };
      setStudents(updatedStudents);
      localStorage.setItem("Student Data", JSON.stringify(updatedStudents));
      setEditIndex(null);
    } else {
      const nextId =
        students.length === 0 ? 1 : Math.max(...students.map((s) => s.id)) + 1;

      const student = { id: nextId, name, city, state, country, course };
      const updatedStudents = [...students, student];
      setStudents(updatedStudents);
      localStorage.setItem("Student Data", JSON.stringify(updatedStudents));
    }

    resetForm();
  };

  const editStudent = (index) => {
    const s = students[index];
    setName(s.name);
    setCity(s.city);
    setState(s.state);
    setCountry(s.country);
    setCourse(s.course);
    setEditIndex(index);
  };

  const deleteStudent = (index) => {
    const studentRecords = students.filter((_, i) => i !== index);
    setStudents(studentRecords);
    localStorage.setItem("Student Data", JSON.stringify(studentRecords));
    if (editIndex === index) {
      setEditIndex(null);
      resetForm();
    }
  };

  return (
    <div className="container my-5">
      <StudentForm
        name={name}
        setName={setName}
        city={city}
        setCity={setCity}
        state={state}
        setState={setState}
        country={country}
        setCountry={setCountry}
        course={course}
        setCourse={setCourse}
        editIndex={editIndex}
        handleSubmit={handleSubmit}
      />

      <StudentTable
        students={students}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}
