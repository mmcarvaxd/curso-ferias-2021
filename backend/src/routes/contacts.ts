import { Router, Request, Response } from 'express'
import { Contact } from '../model/ContactModel'

export class ContactRouter {

    contacts: Contact[] = [
        {
            name: "matheus",
            phone: "111111111"
        }
    ]

    public getRoutes(): Router {

        const router: Router = Router()

        router.get('/', (req: Request, res: Response) => {
            res.send(this.contacts)
        })

        router.post('/', (req: Request, res: Response) => {
            const contact = req.body
            this.contacts.push(contact)

            res.send(this.contacts)
        })

        router.put('/', (req: Request, res: Response) => {
            res.send('Hello World!')
        })

        router.delete('/:id', (req: Request, res: Response) => {
            const id: number = Number(req.params.id)
            this.contacts.splice(id, 1)

            res.send(this.contacts)
        })

        return router
    }
}