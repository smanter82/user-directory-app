import { useState, useEffect } from "react";
import "./styles.css";
import Table from "./components/Table";

export default function App() {
  // const [users, setUser] = useState({
  //   employees: [],
  //   filteredEmployees: [],
  // });
  // useEffect(() => {
  //   const data = fetch("https://randomuser.me/api/?results=5");
  //   data
  //     .then((response) => response.json())
  //     .then((response) => setUser({ employees: response.results }));
  // }, []);

  return <Table></Table>;
}
