import { useState } from "react";
import api from "../api";

export default function Balances() {
  const [groupId, setGroupId] = useState("");
  const [balances, setBalances] = useState([]);

  const fetchBalances = async () => {
    const res = await api.get(`/balances/${groupId}`);
    setBalances(res.data);
  };

  return (
    <>
      <h2>Group Balances</h2>
      <input placeholder="Group ID" onChange={e => setGroupId(e.target.value)} />
      <button onClick={fetchBalances}>View Balances</button>

      <ul>
        {balances.map(b => (
          <li key={b._id}>
            {b.fromUser.name} owes {b.toUser.name} ₹{b.amount / 100}
          </li>
        ))}
      </ul>
    </>
  );
}
