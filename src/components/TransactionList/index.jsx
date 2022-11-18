import { useState } from "react";
import "./style.css";
import noTransaction from "../assets/no-transaction.png";
import { Card } from "../Card";

export function TransationList({ list, setList }) {
  const [filter, setFilter] = useState("");

  const filterTransactions = list.filter((transaction) =>
    filter === "" ? true : transaction.type === filter
  );

  const removeTransaction = (remove) => {
    const filtered = filterTransactions.filter((transaction) => {
      if (transaction !== remove) {
        return transaction;
      }
    });
    setList(filtered);
  };

  return (
    <section>
      <div className="btn--section">
        <h2>Resumo financeiro</h2>
        <div>
          <button onClick={() => setFilter("")}>Todos</button>
          <button onClick={() => setFilter("Entrada")}>Entradas</button>
          <button onClick={() => setFilter("Saída")}>Despesas</button>
        </div>
      </div>

      {list.length === 0 ? (
        <div className="noCard">
          <img src={noTransaction} alt="" />
          <img src={noTransaction} alt="" />
        </div>
      ) : (
        <ul>
          {filterTransactions.map((transaction, index) => (
            <li key={index}>
              <Card addTransaction={transaction} remove={removeTransaction} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
