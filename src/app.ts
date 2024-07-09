import express from "express";
import eventRoutes from "./routes/event.routes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/events", eventRoutes);

export default app;
