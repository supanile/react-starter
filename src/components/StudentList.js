import { useState } from "react";
import "./StudentList.css";
import Item from "./Item";

export default function StudentList({ students, deleteStudent }) {
  const [show, setShow] = useState(true);

  return (
    <div className="student-list">
      <div className="header">
        <h1>Student Count : {students.length}</h1>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>
      {show && (
        <ul>
          {students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} />
          ))}
        </ul>
      )}
    </div>
  );
}
