import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({titulo}) => (
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);

HeaderComponent.prototype = {
    titulo: PropTypes.string.isRequired
}

export default HeaderComponent;
