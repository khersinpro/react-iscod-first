import React from 'react';
import PropTypes from 'prop-types';

const SimLoggin = ({setUser}) => {
    return (
        <div className='container d-flex justify-content-center my-2'>
            <button className='btn btn-primary mx-2' onClick={() => setUser('Eva')}>Eva</button> 
            <button className='btn btn-secondary mx-2' onClick={() => setUser('Aude')}>Aude</button> 
        </div>
    );
};

SimLoggin.propTypes = {
    setUser: PropTypes.func.isRequired
}

export default SimLoggin;