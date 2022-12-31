import express, { RequestHandler, response } from 'express'
import cors from 'cors'
import routes from './routes'
import { request } from 'http';
import path from 'path/posix';

console.log('server running');

const app = express();
app.use(cors());
app.use(express.json() as RequestHandler);
app.use(routes);


app.listen(3331);