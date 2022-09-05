const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Loading Routers
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const issueRoutes = require("./routes/issueRoutes");

dotenv.config();

// Connectint to database
connectDB();

const app = express();
app.use(express.json());

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
