import express from 'express';
import { ContactRouter } from './src/routes/contacts';
import cors from 'cors';

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

const contactRouter = new ContactRouter();

app.use('/contact', contactRouter.getRoutes());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
