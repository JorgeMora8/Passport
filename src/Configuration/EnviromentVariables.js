import {config} from "dotenv"
config()


const mongoLink = process.env.DB_MONGO_LINK
const transporterUser = process.env.TRANSPORTER_USER
const transporterPass = process.env.TRANSPORTER_PASS
const accountSID = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const administratorGMAIL = process.env.ADMINISTRATOR_GMAIL



export { 
    mongoLink, 
    transporterPass, 
    transporterUser, 
    accountSID, 
    authToken, 
    administratorGMAIL
}
