"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [students, setStudents] = useState<
    {
      name: string;
      city: string;
      state: string;
      country: string;
      course: string;
    }[]
  >([]);

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
      const studentData = JSON.parse(data);
      setStudents(studentData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      student.name.trim() === "" ||
      student.city.trim() === "" ||
      student.state.trim() === "" ||
      student.country.trim() === "" ||
      student.course.trim() === ""
    ) 
    {
      alert("Please Fill All the Details");
      return;
    }

    if (editIndex === -1) {
      setStudents([...students, student]);
    } 
    else {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = student;
      setStudents(updatedStudents);
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

  function editStudent(index: number) {
    setStudent(students[index]);
    setEditIndex(index);
  }

  function deleteStudent(index: number) {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  }

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <Link className="home-link" href="/about">Go To About Page</Link>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="City"
          value={student.city}
          onChange={(e) => setStudent({ ...student, city: e.target.value })}
        />

        <input
          type="text"
          placeholder="State"
          value={student.state}
          onChange={(e) => setStudent({ ...student, state: e.target.value })}
        />

        <input
          type="text"
          placeholder="Country"
          value={student.country}
          onChange={(e) => setStudent({ ...student, country: e.target.value })}
        />

        <input
          type="text"
          placeholder="Course"
          value={student.course}
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        />

        <button type="submit">
          {
            editIndex === -1 ? "Add Student" : "Update Student"
          }
        </button>
      </form>

      <h2 className="table-h">Student List</h2>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map(
            (
              item: {
                name: string;
                city: string;
                state: string;
                country: string;
                course: string;
              },
              index: number,
            ) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.country}</td>
                <td>{item.course}</td>

                <td>
                  <button type="button" className="edit" onClick={() => editStudent(index)}>
                    Edit
                  </button>

                  <button type="button" className="delete" onClick={() => deleteStudent(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
