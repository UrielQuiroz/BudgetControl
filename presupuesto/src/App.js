import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [ crearGasto, guardarCrarGasto ] = useState(false);

  //useEffect para actualizar el restante
  useEffect(() => {

    if(crearGasto){

      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //Resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetear a false
      guardarCrarGasto(false);
    }

  }, [gasto]);


  return (

    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido" >
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) :

            <div className="row">
              <div className="one-half column">
                <Formulario 
                    guardarGasto={guardarGasto}
                    guardarCrarGasto={guardarCrarGasto}
                />
              </div>

              <div className="one-half column">
                <Listado
                    gastos={gastos}
                />

                <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                />

              </div>
            </div>

          }

        </div>

      </header>
    </div>

  );
}

export default App;
