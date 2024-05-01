import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Employee(props) {
return (
  <div className="Employee">
<div className="ImageContainer">
<img src={props.employee.image} alt="Employee"/>
</div>
<p className="EmployeeName">{props.employee.lastName} {props.employee.firstName}</p>
<div className="Line"></div>
<p>{props.employee.title} @ {props.employee.department}</p>
<p>{props.employee.email}</p>
<p>{props.employee.phone}</p>
  </div>
)
}

function App() {
const [employees, setEmployees] = useState([])
useEffect(() => {
axios
  .get('http://localhost:3001/employees')
  .then(response => {
setEmployees(response.data)
  })
  }, [])
const employeeItems = employees.map((employee,index) =>
  <Employee key={index} employee={employee}/>
);
return (
<div className="App">
{employeeItems}
</div>
  );
}

export default App;