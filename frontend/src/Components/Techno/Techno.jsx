
import CardTechno from "@/Components/CardTechno/CardTechno";

import TechnoService from "@/_Services/Service.Techno";
import { useEffect, useState } from "react";


const Techno = ({ content_subject }) => {

    const [title, setTitle] = useState("");

    useEffect(() => {
        if (content_subject == "Confort") {
            setTitle("Technologie et Confort")
        } else {
            setTitle("Sécurité")
        }
    }, [content_subject])

    return (
        <div className='Techno'>
            <h2>{title}</h2>

            <ul className='list-techno-cards'>
                {
                    TechnoService.GetAllTechno(content_subject).map((techno) =>
                        <CardTechno content_subject={content_subject} key={techno.id} image={techno.coverName} name={techno.name} description={techno.description} />
                    )
                }
            </ul>

        </div>
    );
};

export default Techno;