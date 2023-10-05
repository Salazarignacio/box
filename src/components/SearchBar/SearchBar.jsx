import Render from "../Render/Render";
import { useState } from "react";

export default function SearchBar({
  value,
  setValue,
  fn,
  fn2,
  product,
  cart,
  setCart,
}) {
  const [on, setOn] = useState(true);

  const reset = () => {
    cart.map((a)=>a.quantity=1)
    setCart([]);
  };

  const fnDelete = (id) => {
    const find = cart.find((a) => a.id == id);
    const index = cart.indexOf(find);
    find.quantity = 1;
    cart.splice(index, 1);
    /* setQuantityValue(1);  */
    setOn(!on);
  };

  let count = 0;
  const mapCart = cart.map((a) => {
    return (count += a.price * a.quantity);
  });

  const change = (e, id) => {
    const rtaId = cart.find((a) => a.id == id);
    console.log(e);
    rtaId.quantity = e ;
    setOn(!on);
    return rtaId.quantity;
  };
  const changePrice = (e, id) => {
    const rtaId = cart.find((a) => a.id == id);
    console.log(e);
    rtaId.price = e;
    setOn(!on);
    return rtaId.price;
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyUp={(e) => fn(e)}
        />
        <button type="submit" onClick={(e) => fn2(e, product)}>
          Ok
        </button>
      </form>
      {cart ? (
        cart.map((a) => {
          return (
            <Render
              key={a.id}
              title={a.title}
              price={a.price}
              quantity={a.quantity}
              fnDelete={fnDelete}
              id={a.id}
              change={change}
              changePrice={changePrice}
            />
          );
        })
      ) : (
        <p>null</p>
      )}
      <p>Total ${mapCart.length > 0 ? mapCart[mapCart.length - 1] : 0}</p>
      <div>
        <button onClick={reset}>Terminar compra</button>
      </div>
    </>
  );
}
