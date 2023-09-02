import "./App.css";
import { TicketList } from "./components/tickets/TicketList";
import { CustomersList } from "./customers/CustomersList";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      <CustomersList />
    </>
  );
};
