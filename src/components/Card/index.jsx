import trash from "../assets/trash.png";
import "./style.css";

export function Card({ addTransaction, remove }) {
  if (addTransaction.type === "Entrada") {
    return (
      <div style={{ borderLeft: "4px solid green" }}>
        <div className="card">
          <h3>{addTransaction.description}</h3>
         <div className="card--transaction">
         <p>R$ {addTransaction.value}</p>
          <img onClick={() => remove(addTransaction)} src={trash} alt="" />
         </div>
        </div>
        <span>{addTransaction.type}</span>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card">
          <h3>{addTransaction.description}</h3>
          <div className="card--transaction">
            <p>R$ {addTransaction.value}</p>
            <img onClick={() => remove(addTransaction)} src={trash} alt="" />
          </div>
        </div>
        <span>{addTransaction.type}</span>
      </div>
    );
  }
}
