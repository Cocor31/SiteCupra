import React from 'react';

const AlertSend = ({ setOpenSended }) => {

    const handleClose = () => {
        setOpenSended(false);
    };

    return (
        <div className='AlertSend'>
            <p>Message Envoyé !</p>
            <button onClick={handleClose}>OK</button>

        </div>
    );
};

export default AlertSend;