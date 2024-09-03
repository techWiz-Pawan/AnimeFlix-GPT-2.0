// Step 1: Import dependencies
// You can use 'import' syntax by adding `"type": "module"` in your package.json
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
databaseConnection();

// Initialize the Express application
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data
app.use(cookieParser()); // Parse cookies

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from the React frontend
    credentials: true, // Allow cookies to be sent with requests
}; 
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/user", userRoute); // User-related routes
// Example: http://localhost:8080/api/v1/user/register

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
});

// Note: To use nodemon, run the server with 'npm run dev'
