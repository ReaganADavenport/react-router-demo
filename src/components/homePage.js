import React from 'react';
import PropTypes from 'prop-types';


const sayHello = name => (!!name ? <h3>Hello {name}</h3>: null);

const HomePage = props => {
    const { name } = props;
    return(
        <>
            <h2>Home Page</h2>
            {sayHello(name)}
            <p>Hello {props.name}</p>
        </>
    );
};

export default HomePage;

HomePage.propTypes = {
    name: PropTypes.string
};