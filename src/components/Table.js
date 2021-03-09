import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Table() {
  const [users, setUser] = useState({
    employees: [],
    searchValue: "",
  });
  const [filteredEmployeesState, setFilteredEmployeesState] = useState([]);

  useEffect(() => {
    const data = fetch("https://randomuser.me/api/?results=5");
    data
      .then((response) => response.json())
      .then((response) =>
        setUser((prevState) => {
          return { ...prevState, employees: response.results };
        })
      );
  }, []);
  console.log(users.employees);

  useEffect(() => {
    const filteredEmployees = () =>
      users.employees.filter(
        (people) => people.email.toLowerCase().indexOf(users.searchValue) !== -1
      );

    setFilteredEmployeesState(filteredEmployees);
  }, [users.employees, users.searchValue]);

  //Switch case to handle what's getting passed in.
  let handleSort = (Last) => {
    setFilteredEmployeesState((prevState) => {
      return users.employees.sort((a, b) => {
        return a.name.last.localeCompare(b.name.last);
      });
    });
  };

  return (
    <div className="App align-content-center text-center">
      <h1>Employee Info Table</h1>
      <input
        className="mb-3"
        type="text"
        name="filterInput"
        placeholder="Filter results by"
        onChange={(event) =>
          setUser({ ...users, searchValue: event.target.value })
        }
      />
      <p>*Click "Last" to sort by last name.*</p>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th value="Last" onClick={() => handleSort("Last")} scope="col">
              Last
            </th>
            <th scope="col">Email</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Phone</th>
            <th scope="col">Cell</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployeesState.map((employee, index) => (
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
