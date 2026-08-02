"use client";

import StudentCard from "./StudentCard";

export default function StudentTable({ students, editStudent, deleteStudent }) {
  return (
    <div className="row justify-content-center mt-5 pt-5">
      <div className="col-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Course</th>
              <th scope="col" className="ps-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center">
                  No Data Found
                </td>
              </tr>
            ) : (
              students.map((s, index) => (
                <StudentCard
                  key={s.id}
                  id={s.id}
                  name={s.name}
                  city={s.city}
                  state={s.state}
                  country={s.country}
                  course={s.course}
                  onEdit={() => editStudent(index)}
                  onDelete={() => deleteStudent(index)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
