const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const itemRoutes = require("./routes/itemRoutes");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(helmet()); // Secure HTTP headers
app.use(express.json()); // Parse JSON bodies

// Routes
app.get("/", (req, res) => {
  res.json("API running...");
});
app.use("/api/items", itemRoutes);

// Global Error Handler (optional)
app.use((err, req, res, next) => {
  res.status(500).json({ message: "An error occurred", error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
