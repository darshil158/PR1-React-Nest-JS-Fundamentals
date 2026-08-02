function StudentCard(props) {
  const { id, name, city, state, country, course, onEdit, onDelete } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{country}</td>
      <td>{course}</td>
      <td>
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>{" "}
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentCard;
