import React, { useEffect, useState } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import TechnoService from "@/_Services/Service.Techno";


const Slider = ({ content_subject }) => {

    const [path, setPath] = useState("path");
    const [title, setTitle] = useState("path");

    useEffect(() => {
        if (content_subject == "Confort") {
            setTitle("Technologie et Confort")
            setPath("http://localhost:3000/images_technologies/")
        } else if (content_subject == "Concept") {
            setPath("http://localhost:3000/images_concept/")
            setTitle("Nos Concepts Cars")
        } else if (content_subject == "Services") {
            setPath("http://localhost:3000/images_services/")
            setTitle("Nos Services")
        } else {
            setPath("http://localhost:3000/images_securite/")
            setTitle("Sécurité")
        }
    }, [content_subject])

    return (
        <div className='Slider'>
            <h2>{title}</h2>

            <AwesomeSlider cssModule={AwesomeSliderStyles} className='SliderAwesome' >
                {
                    TechnoService.GetAllTechno(content_subject).map((techno, index) =>
                        <div key={index} data-src={path + techno.coverName} />
                    )
                }
            </AwesomeSlider>

        </div>
    );
};

export default Slider;