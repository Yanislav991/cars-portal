import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import carRoutes from './src/routes/carRoutes'
import authRoutes from './src/routes/authRoutes'
import { requestLogger } from './src/middlewares/logger';

dotenv.config({ path: './config/.env' });

const PORT = process.env.PORT || 3001;
const MONGODB_URI: string = process.env.MONGODB_URI || "mongodb://127.0.0.1/cars-porta";
const dbOptions: ConnectOptions = {
    socketTimeoutMS: 200
}
const app = express();
var allowedOrigins = ['http://localhost:3000',
    'http://yourapp.com'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

mongoose.connect(MONGODB_URI, dbOptions).catch(err => console.log(err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/api/cars', carRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
