import React from "react";
function Expenses(props) {


    return <div className="App-body">
        <div>
            <h3>Expense 1:</h3>
            <p>{props.title}</p>
            <p>{props.date.toLocaleString()}</p>
            <p>${props.amount}</p>
        </div>

    </div>
}
export default Expenses;