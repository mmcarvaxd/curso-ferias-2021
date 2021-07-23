import { Router, Request, Response } from 'express';
import { ContactController } from '../controllers/ContactController';

export class ContactRouter {
  controller = new ContactController();

  public getRoutes(): Router {
    const router: Router = Router();

    router.get('/', async (req: Request, res: Response) => {
      await this.controller.getContacts(req, res);
    });

    router.get('/:id', async (req: Request, res: Response) => {
      await this.controller.getContact(req, res);
    });

    router.post('/', async (req: Request, res: Response) => {
      await this.controller.createContact(req, res);
    });

    router.put('/', async (req: Request, res: Response) => {
      await this.controller.updateContact(req, res);
    });

    router.delete('/:id', async (req: Request, res: Response) => {
      await this.controller.deleteContact(req, res);
    });

    return router;
  }
}
