import { EntitySchema } from "typeorm";
import { Contact } from "../model/ContactModel";

export const ContactSchema = new EntitySchema<Contact>({
    name: "contact",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
        },
        contactNumber: {
            type: String,
        }
    }
})