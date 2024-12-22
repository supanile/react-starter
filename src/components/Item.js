import "./Item.css";

export default function Item({ data, deleteStudent }) {
  return (
    <li className={data.gender}>
      <h1>{data.name}</h1>
      <button onClick={() => deleteStudent(data.id)} className="delete">
        Del
      </button>
    </li>
  );
}