import Users from "./pages/Users";
import Groups from "./pages/Groups";
import Expenses from "./pages/Expenses";
import Balances from "./pages/Balances";
import './App.css';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Expense Sharing App</h1>
      <Users />
      <Groups />
      <Expenses />
      <Balances />
    </div>
  );
}

export default App;
