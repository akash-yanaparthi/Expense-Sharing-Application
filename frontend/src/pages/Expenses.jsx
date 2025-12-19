import { useState } from "react";
import api from "../api";

export default function Expenses() {
  const [jsonText, setJsonText] = useState("");

  const addExpense = async () => {
    try {
      const data = JSON.parse(jsonText); // parse ONLY here
      await api.post("/expenses/add", data);
      alert("Expense Added Successfully");
    } catch (err) {
      alert(
        err.response?.data?.message ||
        err.message ||
        "Invalid JSON or Server Error"
      );
    }
  };

  return (
    <>
      <h2>Add Expense</h2>
      <textarea
        placeholder="Paste expense JSON here"
        rows={12}
        cols={60}
        onChange={e => setJsonText(e.target.value)}
      />
      <br />
      <button onClick={addExpense}>Add</button>
    </>
  );
}
