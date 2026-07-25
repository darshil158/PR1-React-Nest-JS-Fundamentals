function StudentForm(props) {
  const { student, setStudent, handleSubmit, editIndex } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
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

      <button>{editIndex === -1 ? "Add Student" : "Update Student"}</button>
    </form>
  );
}

export default StudentForm;
