import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import { useEffect, useState } from "react";
import { db } from "../SendData/fbConfig";
import { collection, getDocs} from 'firebase/firestore'
import UploadContainer from "../UpLoadContainer/UploadContainer";
import { Link } from "react-router-dom";

export default  function Container() {
  const [data, setData] = useState([]);
  const [search, upload] = useState(true)
  const [button, setButton] = useState('Cargar Productos')

   useEffect(()=>{
    async function fetchData() {
      const itemCollection = collection(db, 'db');
      try {
        const snapshot = await getDocs(itemCollection);
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [])
          return (
    <>
    <button onClick={()=>{upload(!search)}}>{search?'Cargar Productos':'Facturar'}</button>
   <Link to='/box'> <button onClick={()=>{upload(!search)}}>Ventas y Gastos</button></Link>
    {search?<SearchBarContainer data={data}/>:<UploadContainer></UploadContainer>}
      
      
    </>
  );
}
