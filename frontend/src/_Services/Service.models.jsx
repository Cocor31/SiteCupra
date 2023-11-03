import ListeModels from "@/Assets/Api/Models.json";

const GetAllModels = () => {
    return ListeModels;
}

const GetOneModel = async (id) => {
    const OneModel = await ListeModels.find(model => model.id === id)
    return OneModel
}

const GetMotors = async (id) => {
    const OneModel = await ListeModels.find(model => model.id === id)
    return Array.from(OneModel.motor)
}

const GetDescription = async (id) => {
    const OneModel = await ListeModels.find(model => model.id === id)
    return OneModel.description
}

export const ModelService = {
    GetAllModels, GetOneModel, GetMotors, GetDescription
}

export default ModelService