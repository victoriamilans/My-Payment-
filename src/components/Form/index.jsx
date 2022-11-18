import { useState } from "react";
import { TotalMoney } from "../TotalMoney";
import "./style.css";

export function Form({ list, setList }) {
  const [type, setType] = useState("Entrada");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newTransaction = {
      description: description,
      type: type,
      value: type === "Entrada" ? value : -value,
    };

    setType(newTransaction.type);
    setList([...list, newTransaction]);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form--description">
          <label htmlFor="description">Descrição</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            name="description"
            type="text"
            placeholder="Digite aqui sua descrição"
            required
            value={description}
          ></input>

          <span>Ex: Compra de roupas</span>
        </div>
        <div className="form--information">
          <div className="form--value">
            <label htmlFor="value">Valor</label>
            <div>
              <input
                onChange={(event) => setValue(event.target.value)}
                name="value"
                type="number"
                placeholder="1"
                required
                value={value}
              ></input>
              <span>R$</span>
            </div>
          </div>

          <div className="form--vaueType">
            <label htmlFor="type">Tipo de valor</label>
            <select
              onChange={(event) => setType(event.target.value)}
              name="type"
              required
              value={type}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <button className="btn" type="submit">
          Inserir Valor
        </button>

        {list.length ? (
          <div className="form--totalMoney">
            <TotalMoney list={list} />
          </div>
        ) : (
          <p></p>
        )}
      </form>
    </>
  );
}
