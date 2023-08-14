import { DateTime } from "luxon";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../SendData/fbConfig";


export default function Day({
  month,
  day,
  year,
  inputs,
  setInputs,
  on,
  setOn
}) {
  const subtotal = {
    subtotal1:
      parseInt(inputs.a) +
      parseInt(inputs.b) +
      parseInt(inputs.c) +
      parseInt(inputs.d) +
      parseInt(inputs.e) +
      parseInt(inputs.f) +
      parseInt(inputs.g) +
      parseInt(inputs.h) +
      parseInt(inputs.i) +
      parseInt(inputs.j),
    subtotal2:
      parseInt(inputs.uno) + parseInt(inputs.dos) + parseInt(inputs.tres),
  };
  const suma = parseInt(inputs.efFinal) + parseInt(subtotal.subtotal1);
  const total = {
    ventas: suma - parseFloat(inputs.efInicial),
    gastos: parseFloat(subtotal.subtotal1) + parseFloat(subtotal.subtotal2),
  };
  const today = DateTime.local(year, month, day).toLocaleString(DateTime.DATE_FULL)
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const dt = DateTime.local(year, month, day);
  const { a, b, c, d, e, f, g, h, i, j, uno, dos, tres, efInicial, efFinal } =
  inputs;
  const { subtotal1, subtotal2 } = subtotal;
  const { ventas, gastos } = total;
  

  const sendDay = () => {
    const daySale = {
   ...inputs,
  
    };
    const docRef = doc(db, "caja", today)
    

    setDoc(docRef, daySale) 
  }

  return (
    <div className="days">
      <div onClick={()=>setOn(false)} className="dayActive">x</div>
      <p className="mb-3 date">{dt.toLocaleString(DateTime.DATE_HUGE).toUpperCase()}</p>
      <div className="headerDay date mb-1">
        <div>
          <label style={{marginRight: '13px'}}>Efectivo Inicial</label>
          <input
            className="number"
            name="efInicial"
            value={efInicial}
            onChange={(event) => handleInput(event)}
            type="number"
          />
        </div>
        <div>
          <label style={{marginRight: '13px'}}>Efectivo Final</label>
          <input
            className="number"
            name={"efFinal"}
            value={efFinal}
            onChange={(event) => handleInput(event)}
          />
        </div>
      </div>
      <div className="gastosContainer mb-3">
        <div>
          <p>Gastos en Efectivo</p>
          <ul>
            <label>Proveedor</label>
            <li>
              <input type="text" className="text" />
              <input
                className="number"
                name={"a"}
                value={a}
                type="number"
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input className="text" type="text" />
              {/* hacer esto dinamico con los name hechos con counters */}
              <input
                className="number"
                name={"b"}
                value={b}
                onChange={(event) => handleInput(event)}
                type="number"
              />
            </li>
            <li>
              <input className="text" type="text" />
              <input
                className="number"
                name={"c"}
                value={c}
                type="number"
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input className="text" type="text" />
              <input
                className="number"
                name={"d"}
                type="number"
                value={d}
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input className="text" type="text" />
              <input
                className="number"
                name={"e"}
                type="number"
                value={e}
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input className="text" type="text" />
              <input
                className="number"
                type="number"
                name={"f"}
                value={f}
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input className="text" type="text" />
              <input
                className="number"
                type="number"
                name={"g"}
                value={g}
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input type="text" className="text" />
              <input
                className="number"
                type="number"
                name={"h"}
                value={h}
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input type="text" className="text" />
              <input
                className="number"
                type="number"
                name={"i"}
                value={i}
                onChange={(event) => handleInput(event)}
              />
            </li>
            <li>
              <input type="text" className="text" />
              <input
                className="number"
                type="number"
                name={"j"}
                value={j}
                onChange={(event) => handleInput(event)}
              />
            </li>
          </ul>
          <p>Subtotal ${subtotal1}</p>
        </div>
        <div>
          <p>Gastos en Tranferencias</p>
          <ul>
            <label>Proveedor</label>
            <li>
              <input type="text" className="text" />
              <input
                className="number"
                name={"uno"}
                value={uno}
                onChange={(event) => handleInput(event)}
                type="number"
              />
            </li>
            <li>
              <input type="text" className="text" />
              <input
                className="number"
                name={"dos"}
                value={dos}
                onChange={(event) => handleInput(event)}
                type="number"
              />
            </li>
            <li>
              <input className="text" type="text" />
              <input
                className="number"
                name={"tres"}
                value={tres}
                onChange={(event) => handleInput(event)}
                type="number"
              />
            </li>
          </ul>
          <p>Subtotal ${subtotal2}</p>
        </div>
      </div>
      <div className="headerDay date">
        <p style={{ fontWeight: "bold" }}>
          Venta{" "}
          <span
            style={{
              backgroundColor: " rgb(122, 209, 122)",
              padding: "3px",
              borderRadius: "3px",
            }}
          >
            ${ventas}
          </span>{" "}
          Gasto
          <span
            style={{
              backgroundColor: "rgb(255, 88, 88)",
              padding: "3px",
              borderRadius: "3px",
            }}
          >
            ${gastos}
          </span>
        </p>
      <button className="btn-send" onClick={()=>{sendDay(gastos, ventas); setOn(false)}}
  style={{border: 'none',  padding: 7, borderRadius: 5}}>Cargar día</button>
      </div>
    </div>
  );
}
