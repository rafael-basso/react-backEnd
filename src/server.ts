import express, { RequestHandler, response } from 'express'
import cors from 'cors'
import routes from './routes'

console.log('server running');

const app = express();
app.use(cors());
// app.use(cors({
//   origin: ['https://react-front-end-opal.vercel.app/', 'http://localhost:3000'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));
app.use(express.json() as RequestHandler);
app.use(routes);

app.listen(3331);