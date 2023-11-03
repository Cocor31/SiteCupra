import ListeConfort from "@/Assets/Api/Techno.json";
import ListeSecu from "@/Assets/Api/Secu.json";
import ListeConcept from "@/Assets/Api/Concept.json";
import ListeServices from "@/Assets/Api/Services.json";

const GetAllTechno = (content_subject) => {
    if (content_subject == "Confort") {
        return ListeConfort;
    } else if (content_subject == "Concept") {
        return ListeConcept;
    } else if (content_subject == "Services") {
        return ListeServices;
    } else {
        return ListeSecu;
    }
}

export const TechnoService = {
    GetAllTechno
}

export default TechnoService