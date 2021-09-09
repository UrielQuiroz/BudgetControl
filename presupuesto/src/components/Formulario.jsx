import React, { useState } from "react";
import Error from "./Error";
import shortid from 'shortid'


const Formulario = ({agregarNuevoGato}) => {

    const [ nombregasto, guardarNombreGasto] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //Construir el gasto
        const gasto = {
            nombregasto,
            cantidad,
            id: shortid.generate()
        }

        //Pasar el gasto al componente principal
        agregarNuevoGato(gasto);

        //Resetear el formulario
        guardarNombreGasto('');
        guardarCantidad(0);
    }

  return (
    <form
        onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>

      {error ? <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto" /> : null}

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
