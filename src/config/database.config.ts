import mongoose from "mongoose";

const connectDB = async () => {
  const dbUrl =
    process.env.DB_URL || "mongodb://localhost:27017/event_management";
  try {
    const conn = await mongoose.connect(dbUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
