import * as express from 'express'
import router from './routes/userRoute';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var options = {}

const app = express();
app.use(express.json())
app.use("/v1",router)
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

export default app