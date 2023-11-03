import React from 'react';

const BigCard = ({ image, name }) => {

    return (
        <div className='BigCard'>
            <img src={"http://localhost:3000/images_models/" + image} alt="Card d'un modèle Cupra" />
            <h2>{name}</h2>
        </div>
    );
};

export default BigCard;