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
        try {
            let contacts = await this.contactRepository.find()
            res.send(contacts)
            
        } catch (error) {
            res.status(400).send(error)
        }
    }

    async getContact(req: Request, res: Response) {
        try {
            
            let contact = await this.contactRepository.findOne(req.params.id)
            res.send(contact)
        } catch (error) {
            res.status(400).send(error)
            
        }
    }

    async createContact(req: Request, res: Response) {
        try {
            
            let contact: Contact = req.body
    
            if(!contact) {
                res.status(400).send('O contato não foi enviado')
            }
    
            let newContact = this.contactRepository.create(contact)
            await this.contactRepository.save(newContact)
    
            res.send(newContact)
        } catch (error) {
            res.status(400).send(error)
            
        }
    }

    async updateContact(req: Request, res: Response) {
        try {
            
            let contact = await this.contactRepository.findOne(req.body.id)
            contact = this.contactRepository.merge(contact, req.body)
            let newContact = await this.contactRepository.save(contact)
    
            res.send(newContact)
        } catch (error) {
            res.status(400).send(error)
            
        }
    }

    async deleteContact(req: Request, res: Response) {
        try {
            let contact = await this.contactRepository.findOne(req.params.id)
            await this.contactRepository.remove(contact)
    
            res.send({})
        } catch (error) {
            res.status(400).send(error)

        }
    }
}
