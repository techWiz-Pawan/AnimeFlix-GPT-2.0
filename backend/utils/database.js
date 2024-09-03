import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables (auto-detects the .env file in the root directory)
dotenv.config();

// Function to connect to the MongoDB database
const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI) // Removed deprecated options
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with an error code
    });
};

export default databaseConnection;
