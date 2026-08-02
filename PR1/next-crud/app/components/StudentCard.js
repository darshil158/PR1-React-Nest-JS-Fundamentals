"use client";

export default function StudentCard(props) {
  const { id, name, city, state, country, course, onEdit, onDelete } = props;
  return (
    <tr className="align-middle">
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{country}</td>
      <td>{course}</td>
      <td>
        <button className="edit-btn me-2 fw-bold" onClick={onEdit}>
          Edit
        </button>
        <button className="delete-btn fw-bold" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
