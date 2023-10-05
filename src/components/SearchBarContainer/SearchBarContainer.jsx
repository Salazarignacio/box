import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function SearchBarContainer({ data }) {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState("");
  const [cart, setCart] = useState([]);


  const searchProduct = () => {
    const rtaId = data.find((a) => a.id == value);
    if (rtaId) {
      setProduct(rtaId);
      return rtaId;
    } else return false;
  };

  const submit = (e, prod) => {
    const rtaId = cart.find((a) => a.id == value);
    e.preventDefault();
    if (!rtaId && searchProduct()) {
      setCart((prev) => [...prev, prod]);
    } else if (searchProduct()) {
      prod.quantity++;
      setValue(prod.quantity)
    } else {
      alert("producto no encontrado");
    }
    setValue("");
  };

  return (
    <>
      <SearchBar
        value={value}
        setValue={setValue}
        fn={searchProduct}
        fn2={submit}
        product={product}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}
