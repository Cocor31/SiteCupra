import React, { useEffect, useState } from 'react';

const CardTechno = ({ content_subject, image, name, description }) => {

    const [path, setPath] = useState("");

    useEffect(() => {
        if (content_subject == "Confort") {
            setPath("http://localhost:3000/images_technologies/" + image)
        } else {
            setPath("http://localhost:3000/images_securite/" + image)
        }
    }, [content_subject])

    return (
        <li className='CardTechno'>
            <img src={path} alt="Card d'une technologie Cupra" />
            <h3>{name}</h3>
            <p>{description}</p>
        </li>
    );
};

export default CardTechno;