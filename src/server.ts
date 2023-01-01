import express, { RequestHandler, response } from 'express'
import cors from 'cors'
import routes from './routes'

console.log('server running');

const app = express();
app.use(cors());
app.use(express.json() as RequestHandler);
app.use(routes);


app.listen(3331);