import { useState, useEffect } from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

function Table() {
  const [users, setUser] = useState({
    employees: [],
    searchValue: "",
  });

  useEffect(() => {
    const data = fetch("https://randomuser.me/api/?results=5");
    data
      .then((response) => response.json())
      .then((response) => setUser({ employees: response.results }));
  }, []);

  let filteredEmployees = users.employees.filter((people) => {
    return people.email.toLowerCase().indexOf(users.searchValue) != -1;
  });

  // let sortedEmployees = () => {

  // }

  const options = [
    { value: "First Name", label: "Last Name" },
    { value: "Last Name", label: "First Name" },
  ];
  return (
    <div className="App">
      <h1>Employee Info Table</h1>
      <input
        type="text"
        name="filterInput"
        placeholder="Filter results by"
        onChange={(event) =>
          setUser({ ...users, searchValue: event.target.value })
        }
      />
      <Select options={options} />
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
          {filteredEmployees.map((employee, index) => (
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
