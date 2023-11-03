import React, { useEffect, useState } from 'react';

import BigCard from "@/Components/BigCard/BigCard";
import Description from "@/Components/Description/Description";
import Techno from "@/Components/Techno/Techno";

import Slider from "@/Components/Slider/Slider"

import flechegauche from '@/Assets/Images/Components/Dropdown/arrow-left-solid.svg';
import flechedroite from '@/Assets/Images/Components/Dropdown/arrow-right-solid.svg';


import ModelService from "@/_Services/Service.models";


const Home = () => {
    const [index, setIndex] = useState(0);
    const [modelG, setmodel] = useState({})
    const length = 6;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    useEffect(() => {
        getBigCardInfo()
    }, [index])

    const getBigCardInfo = async () => {
        await ModelService.GetOneModel("" + index)
            .then((data) => {
                setmodel(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='Home'>
            <section className="carousel">
                <div className='navbar'>
                    <img src={flechegauche} alt="défile gauche" onClick={handlePrevious} />
                    <img src={flechedroite} alt="défile droite" onClick={handleNext} />
                </div>
                {<BigCard key={modelG.id} image={modelG.coverName} name={modelG.name} />}

            </section>
            <Description id={modelG.id} />
            <section className="sectionTechno">
                <Techno content_subject="Confort" />
            </section>

            <section className="sectionTechno">
                <Techno content_subject="Sécurité" />
            </section>

            <section className="sectionSlider">
                <div className='ConceptCars'>
                    <Slider content_subject="Concept" />
                </div>
            </section>

            <section className="sectionSlider">
                <div className='Services'>
                    <Slider content_subject="Services" />
                </div>
            </section>
        </div>
    );
};

export default Home;