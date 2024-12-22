import { useState } from "react";
import "./AddForm.css";

export default function AddForm({ students, setStudent }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  function saveStudent(e) {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please input student name.");
      return;
    }

    const newStudent = {
      id: Math.floor(Math.random() * 1000),
      name: name.trim(),
      gender: gender,
    };

    setStudent([...students, newStudent]);
    setName("");
    setGender("male");
  }

  return (
    <section className="form-container">
      <form onSubmit={saveStudent}>
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" className="btn-add">
          Save
        </button>
      </form>
    </section>
  );
}
