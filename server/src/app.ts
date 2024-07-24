import express from 'express';
import userRoutes from './routes/userRoutes';
import teamRoutes from './routes/teamRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});