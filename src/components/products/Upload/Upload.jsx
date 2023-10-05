export default function Upload({
  idValue,
  setIdValue,
  titleValue,
  setTitleValue,
  priceValue = 0,
  setPriceValue,
}) {
  return (
    <>
      <form>
        <div>
          <label>Codigo</label>
          <input
            type="text"
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
          />
        </div>
        <div>
          <label>Titulo</label>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="text"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}
