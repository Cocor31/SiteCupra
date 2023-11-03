const SendMessage = (nom, email, message) => {

    const objMessage = {
        nom: { nom },
        email: { email },
        message: { message }
    }
    console.log(objMessage)
}

export const ContactService = {
    SendMessage
}

export default ContactService