require("dotenv").config();
import app from "./app";
import connectDB from "./config/database.config";

const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
