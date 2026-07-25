function StudentCard(props) {
  const { student, onEdit, onDelete } = props;
  
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>City : {student.city}</p>

      <p>State : {student.state}</p>

      <p>Country : {student.country}</p>

      <p>Course : {student.course}</p>

      <button className="edit" onClick={onEdit}>
        Edit
      </button>

      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
