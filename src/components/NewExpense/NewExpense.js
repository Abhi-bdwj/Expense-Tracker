import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseform from "./NewExpenseForm";
const NewExpense = (props) => {
  const {onAddExpense}=props;
  const [isEditing, setEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(newExpenseData);
    setEditing(false);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseform onSaveExpenseData={SaveExpenseDataHandler} OnCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
