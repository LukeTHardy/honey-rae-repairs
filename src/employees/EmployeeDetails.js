import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../services/employeeService";
import "./Employee.css";

export const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email: </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty: </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate: </span>${employee.rate}/hr*
      </div>
      <div>
        <span className="employee-info">Active Tickets: </span>
        {employee.employeeTickets?.length}
      </div>
      <footer className="employee-footer">
        *Rate subject to change at employee's discretion
      </footer>
    </section>
  );
};
