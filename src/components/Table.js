import { useState, useEffect } from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

function Table() {
  const [users, setUser] = useState({
    employees: [],
    filteredEmployees: [],
  });
  useEffect(() => {
    const data = fetch("https://randomuser.me/api/?results=5");
    data
      .then((response) => response.json())
      .then((response) => setUser({ employees: response.results }));
  }, []);

  // const handleFilterClick = () => {
  //   console.log("clicked");

  // };

  const handleInputChange = () => {
    console.log("input changed");
    //define state, update state, grab state from button click
    const arr = [users.employees];
    // console.log(arr);
    const filteredArr = arr.filter(
      () => event.target.value === users.employees.email
    );
    console.log(event.target.value);
    setUser({ filteredEmployees: filteredArr });
  };

  const handleSortInputChange = () => {
    console.log("sort input changed");
  };

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
        onChange={handleInputChange}
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
          {users.employees.map((employee, index) => (
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
