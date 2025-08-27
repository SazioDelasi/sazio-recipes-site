import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from '../models/index.js';
import recipeRoutes from '../routes/recipeRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import reviewRoutes from '../routes/reviewRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
