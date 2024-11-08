import express, { RequestHandler, response } from 'express'
import cors from 'cors'
import routes from './routes'

const app = express();
const port = process.env.PORT || 3331;
app.use(cors());
app.use(express.json() as RequestHandler);
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
})