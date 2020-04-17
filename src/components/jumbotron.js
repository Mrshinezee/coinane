import React from 'react';
import PropTypes from 'prop-types';
// import { gatsby } from 'gatsby';

import '../styles/jumbotron.scss';


const jumbotron = props => {
    return (
        <div className='jumbotronContainer'>
            <h1 className='jumbotronTitle'>Start trading your crypto</h1>
            <p className='jumbotronMessage'>Understandable and safe platform for earning on exchange rates, stocks, indices and commodities. Trading with us is easier than you think.</p>
            <div>
                <button className='registerButton'>
                    Register
                </button>
            </div>
        </div>
    );
};

jumbotron.propTypes = {
    
};

export default jumbotron;