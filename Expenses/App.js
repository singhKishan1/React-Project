import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 245.43,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 345.21,
    date: new Date(2021, 5, 17),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 400.67,
    date: new Date(2021, 6, 8),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450.91,
    date: new Date(2021, 8, 4),
  },
  {
    id: "e5",
    title: "A book",
    amount: 45.2,
    date: new Date(2019, 5, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
