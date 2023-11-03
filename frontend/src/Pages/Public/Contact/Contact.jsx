import React, { useState } from 'react';

import ContactService from "@/_Services/Service.contact";
import AlertSend from "@/Components/AlertSend/AlertSend";

const Contact = () => {

    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [openSended, setOpenSended] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        ContactService.SendMessage(nom, email, message)

        setNom('')
        setEmail('')
        setMessage('')
        setOpenSended(true)
    }

    return (
        <div className='Contact'>
            <h1>Contactez-nous</h1>
            <p>Un avis, des questions ? Nous sommes là pour vous accompager ...</p>
            <form onSubmit={handleSubmit}>
                <div className='group'>
                    <label htmlFor="nom">Votre nom</label>
                    <input type="text" name="nom" value={nom} onChange={(e) => { setNom(e.target.value) }} />
                </div>
                <div className='group'>
                    <label htmlFor="email">Votre email</label>
                    <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='group'>
                    <label htmlFor="message">Votre message</label>
                    <textarea maxLength="5000" rows="10" name="message" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                </div>
                <div className='BtnContainer'>
                    <button>Envoyer</button>
                </div>
                <div className='MessageSended'>
                    {
                        openSended && (
                            <AlertSend setOpenSended={setOpenSended} />
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default Contact;