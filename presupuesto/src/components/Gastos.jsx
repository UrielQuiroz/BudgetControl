import React from 'react';
import PropTypes from 'prop-types';

const Gastos = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombregasto}
            <span className="gasto">$ {gasto.cantidad}</span>
        </p>
    </li>
)

Gastos.propTypes = {
    gasto: PropTypes.array.isRequired
}

export default Gastos;