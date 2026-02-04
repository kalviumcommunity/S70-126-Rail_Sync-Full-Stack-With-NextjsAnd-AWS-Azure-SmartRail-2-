import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import your routes
import trainRoutes from './routes/trains';
import authRoutes from './routes/auth';
import bookingRoutes from './routes/bookings'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
// ✅ Configure CORS once (Allow Frontend)
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Register Routes
app.use('/api/auth', authRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/bookings', bookingRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});