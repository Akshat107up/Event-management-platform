import { Request, Response } from "express";
import { EventModel } from "../models/event.model";

class EventController {
  // Add a new event
  async addEvent(req: Request, res: Response) {
    try {
      const event = new EventModel(req.body);
      await event.save();
      res.status(201).json(event);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }

  // Update an existing event
  async updateEvent(req: Request, res: Response) {
    try {
      const event = await EventModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }

  // Delete an event
  async deleteEvent(req: Request, res: Response) {
    try {
      const event = await EventModel.findByIdAndDelete(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }

  // Retrieve an event by its ID
  async getEventById(req: Request, res: Response) {
    try {
      const event = await EventModel.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }

  // List all events with optional filters
  async listEvents(req: Request, res: Response) {
    try {
      const filters = req.query;
      const events = await EventModel.find(filters);
      res.json(events);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }
}

export default new EventController();
