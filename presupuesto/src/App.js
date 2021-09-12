import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //Cuando agreguemos un nuevo gasto
  const agregarNuevoGato = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }

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
                    agregarNuevoGato={agregarNuevoGato}
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
