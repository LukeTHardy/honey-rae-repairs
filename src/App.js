import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { TicketList } from "./components/tickets/TicketList";
import { CustomersList } from "./customers/CustomersList";
import { EmployeeList } from "./employees/EmployeeList";
import { NavBar } from "./nav/NavBar";
import { Welcome } from "./welcome/Welcome";
import { CustomerDetails } from "./customers/CustomerDetails";
import { EmployeeDetails } from "./employees/EmployeeDetails";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomersList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
