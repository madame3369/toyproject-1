import express from 'express';
import userRoutes from './routes/userRoutes';
import teamRoutes from './routes/teamRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
// const HOST = process.env.HOST || 'localhost';

// const corsOptions = {
//     origin: ['http://localhost:3000', 'http://captaincheoni.com'],
//     optionsSuccessStatus: 200
//   };
  
// app.use(cors(corsOptions));

app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});