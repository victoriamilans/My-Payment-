import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import LandingPage from "./components/LandingPage";
import { TransationList } from "./components/TransactionList";


function App() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [isLogged, setLogin] = useState(false);
  const [filter, setFilter] = useState("");

  const filterTransactions = transactionsList.filter((transaction) =>
    filter === "" ? true : transaction.type === filter
  );

  function login() {
    setLogin(!isLogged);
  }

  return (
    <div>
      {isLogged ? (
        <>
          <Header isLogged={login} />
          <div className="root">
            <Form list={filterTransactions} setList={setTransactionsList} />
            <TransationList
              list={transactionsList}
              setList={setTransactionsList}
            />
          </div>
        </>
      ) : (
        <LandingPage isLogged={login} />
      )}
    </div>
  );
}
export default App;
