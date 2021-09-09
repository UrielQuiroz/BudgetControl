import React, { Fragment, useState } from "react";

const Pregunta = () => {
  //DEfinir presupuesto
  const [cantidad, guardarCantidad] = useState(0);

  //Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10))
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
