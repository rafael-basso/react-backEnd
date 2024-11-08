import express, { RequestHandler, response } from 'express'
import cors from 'cors'
import routes from './routes'

console.log('server running');

const app = express();
// app.use(cors());
app.use(cors({
  origin: ['https://react-front-kdmriwteu-rafael-bassos-projects.vercel.app/', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json() as RequestHandler);
app.use(routes);

app.listen(3331);