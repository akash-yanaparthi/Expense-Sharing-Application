import { useState } from "react";
import api from "../api";

export default function Groups() {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const createGroup = async () => {
    await api.post("/groups/create", {
      name,
      members: members.split(","),
      createdBy
    });
    alert("Group Created");
  };

  return (
    <>
      <h2>Create Group</h2>
      <input placeholder="Group Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Member IDs (comma separated)" onChange={e => setMembers(e.target.value)} />
      <input placeholder="Created By User ID" onChange={e => setCreatedBy(e.target.value)} />
      <button onClick={createGroup}>Create</button>
    </>
  );
}
