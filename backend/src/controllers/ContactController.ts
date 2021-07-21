import { Request, Response } from "express";
import { createConnection, getConnection, Repository } from 'typeorm'
import { Contact } from "../model/ContactModel";
import { ContactSchema } from "../repository/contact.definition";

export class ContactController {
    contactRepository: Repository<Contact> = null

    constructor() { 
        createConnection().then(() => {
            this.contactRepository = getConnection().getRepository(ContactSchema)
            console.log('Connected to Database');
        })
    }

    async getContacts(req: Request, res: Response) {
        let contacts = await this.contactRepository.find()
        res.send(contacts)
    }

    getContact(req: Request, res: Response) {
        res.send({})
    }

    async createContact(req: Request, res: Response) {
        let contact: Contact = req.body

        if(!contact) {
            res.status(400).send('O contato não foi enviado')
        }

        let newContact = this.contactRepository.create(contact)
        await this.contactRepository.save(newContact)

        res.send(newContact)
    }

    updateContact(req: Request, res: Response) {
        return {};
    }

    deleteContact(req: Request, res: Response) {
        return {};
    }
}
