import { Router, Request, Response } from 'express'
import { ContactController } from '../controllers/ContactController'
import { Contact } from '../model/ContactModel'

export class ContactRouter {

    controller = new ContactController()

    public getRoutes(): Router {

        const router: Router = Router()

        router.get('/', async (req: Request, res: Response) => {
            await this.controller.getContacts(req, res)
        })

        router.post('/', async (req: Request, res: Response) => {
            await this.controller.createContact(req, res);
        })

        router.put('/', (req: Request, res: Response) => {
            res.send('Hello World!')
        })

        router.delete('/:id', (req: Request, res: Response) => {
            const id: number = Number(req.params.id)
            //this.contacts.splice(id, 1)

            //res.send(this.contacts)
        })

        return router
    }
}