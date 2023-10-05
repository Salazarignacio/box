import "./render.css";
import { useState } from "react";

export default function Render({
  title,
  price,
  quantity,
  fnDelete,
  id,
  change,
  changePrice
}) {
  const [qValue, setQValue] = useState(quantity)
  const [pValue, setPValue] = useState(price)
  return (
    <>
      <p>
        <button onClick={() => fnDelete(id)}>X</button>
        <input
          className="input"
          type="number"
          value={qValue}
          onChange={(e) => setQValue(change(e.target.value, id))}
        />{" "}
        {title} 
        <input
          className="input2"
          type="number"
          value={pValue}
          onChange={(e) => setPValue(changePrice(e.target.value, id))}
        />
         ${price * quantity}
      </p>
    </>
  );
}
