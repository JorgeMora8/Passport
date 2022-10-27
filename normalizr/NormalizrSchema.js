//=> Schemas
import {schema, normalize} from "normalizr";


const authorSchema = new schema.Entity("author", {idAttribute:"mail"})
const messageSchema = new schema.Entity("mensaje", {
    author: [authorSchema]}); 


export { messageSchema }