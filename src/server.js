import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

// Loading Routers
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import issueRoutes from "./routes/issueRoutes.js";

dotenv.config();

// Connectint to database
connectDB();

const app = express();
app.use(express.json());
app.use(notFound);
app.use(errorHandler);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/issue", issueRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
