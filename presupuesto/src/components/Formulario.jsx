import React, { useState } from "react";

const Formulario = () => {

    const [ nombregasto, guardarNombreGasto] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);

  return (
    <form>
      <h2>Agrega tus gastos aquí</h2>

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombregasto}
          onChange={ e => guardarNombreGasto(e.target.value) }
        />
      </div>

      <div className="campo">
        <label>Cantidad</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={ e => guardarCantidad( parseInt(e.target.value, 10)) }
        />
      </div>

      <input type="submit" className="button-primary u-full-width" />

    </form>
  );
};

export default Formulario;
