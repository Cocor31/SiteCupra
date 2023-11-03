import React, { useEffect, useState } from 'react';

import flechehaut from '@/Assets/Images/Components/Dropdown/DropDownFlecheHaut.png'

import ModelService from "@/_Services/Service.models";


const Description = ({ id }) => {

    const [open, setOpen] = useState(true)
    const [model_descr, setmodel_descr] = useState("")
    const [indexModelChoise, setIndexModelChoise] = useState(0)
    const [price, setPrice] = useState("0")
    const [ArrayMotors, setmotors] = useState([]);

    useEffect(() => {
        if (id) {
            getMotorisationInfo()
            getDescription()
            setIndexModelChoise(0)
        }
    }, [id])

    useEffect(() => {
        if (ArrayMotors.length > 0) {
            setPrice(ArrayMotors[indexModelChoise].prix)
        }
    }, [indexModelChoise])

    const getMotorisationInfo = async () => {
        await ModelService.GetMotors("" + id)
            .then((response) => {
                if (response) {
                    setmotors(response);
                    setPrice(response[0].prix)
                }
            })
            .catch((error) => { console.log(error) })
    }

    const getDescription = async () => {
        await ModelService.GetDescription("" + id)
            .then((response) => {
                if (response) {
                    setmodel_descr(response);
                }
            })
            .catch((error) => { console.log(error) })
    }

    const handleMotorChoise = (e) => {
        setIndexModelChoise(e.target.getAttribute('id'))
    };

    const handleCollapse = () => {
        setOpen(!open)
    }

    return (
        <div className='Description'>
            <div className='Collapse-header' onClick={handleCollapse}>
                {
                    !open && (
                        <p>Plus d'infos ...</p>
                    )
                }
                {
                    open && (
                        <img src={flechehaut} alt="Image réduire Description" />
                    )
                }
            </div>
            {
                open && (
                    <div className='Collapse-description'>
                        <div className='ContainerMotorisation'>
                            <h3>Motorisations: </h3>
                            <ul className='List-Motors'>
                                {
                                    Array.from(ArrayMotors).map((motor, index) =>
                                        (indexModelChoise == index) ? (<li id={index} onClick={handleMotorChoise} key={index} className='ItemSelected'  >{motor.name}</li>) : (<li id={index} onClick={handleMotorChoise} key={index} >{motor.name}</li>))
                                }
                            </ul>
                        </div>

                        <div className='Detail'>
                            <p>{model_descr} </p>
                        </div>

                        <div className='Prix'>
                            <p>A partir de </p>
                            <h3>{price}  €</h3>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Description;