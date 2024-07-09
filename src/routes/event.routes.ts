import { Router } from "express";
import EventController from "../controllers/event.controller";

const router = Router();

// Add a new event
router.post("/", EventController.addEvent);

// Update an existing event
router.put("/:id", EventController.updateEvent);

// Delete an event
router.delete("/:id", EventController.deleteEvent);

// Retrieve an event by its ID
router.get("/:id", EventController.getEventById);

// List all events with optional filters
router.get("/", EventController.listEvents);

export default router;
