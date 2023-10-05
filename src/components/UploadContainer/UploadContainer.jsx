import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../SendData/fbConfig";
import Upload from "../products/Upload/Upload";

export default function UploadContainer() {
  const [idValue, setIdValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const uploadProduct = async () => {
    const productId = idValue;
    const order = { title: titleValue, price: priceValue, quantity: 1 };

    const orderDocRef = doc(db, "db", productId);

    try {
      await setDoc(orderDocRef, order);
      
      setIdValue("")
      setTitleValue("")
      setPriceValue(0)
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <>
      <Upload
        idValue={idValue}
        setIdValue={setIdValue}
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        titleValue={titleValue}
        setTitleValue={setTitleValue}
      />
      <button onClick={uploadProduct}>Cargar producto</button>
    </>
  );
}
