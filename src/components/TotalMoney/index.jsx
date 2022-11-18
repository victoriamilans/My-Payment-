import "./style.css";

export function TotalMoney({ list }) {
  const result = list.map((transaction) => parseInt(transaction.value));

  if (list) {
    const value = result.reduce((acc, act) => {
      return acc + act;
    }, 0);

    return (
      <div className="form--totalMoney">
        <div>
          <h2>Valor total:</h2>
          <p>O valor se refere ao saldo</p>
        </div>
        <span>{`R$ ${value}`}</span>
      </div>
    );
  }
}
