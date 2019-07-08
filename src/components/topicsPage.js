import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

const Topic = props => <h3>Requested Param: {props.match.params.id}</h3>;

const Topics = ({ match }) => {
    return (
    <div>
        <h2>Topics</h2>
    <nav>
        <ul>
            <li>
            <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>
    </nav>
    <Route path={`${match.path}/:id`} coponent={Topic} />
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </div>
    );
};

export default Topics;