import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Table(props) {
  console.log(props.users);

  return (
    <div className="App">
      <h1>Employee Info Table</h1>
      <input
        type="text"
        placeholder="Filter results by"
        onChange={props.handleInputChange}
      />
      <button
        type="button"
        onClick={props.handleFilterClick}
        className="btn btn-primary"
      >
        Filter
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Phone</th>
            <th scope="col">Cell</th>
          </tr>
        </thead>
        <tbody>
          {props.users.employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
              <td>{employee.phone}</td>
              <td>{employee.cell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
