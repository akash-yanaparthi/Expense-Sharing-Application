import { useState } from "react";
import api from "../api";

export default function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    await api.post("/users/create", { name, email });
    alert("User Created");
  };

  return (
    <>
      <h2>Create User</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={createUser}>Create</button>
    </>
  );
}
