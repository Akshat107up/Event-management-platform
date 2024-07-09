import { Schema, model, Document } from "mongoose";

interface Location {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Event extends Document {
  eventName: string;
  eventDate: Date;
  organizer: string;
  email: string;
  phone: string;
  location: Location;
  createdAt: Date;
  updatedAt: Date;
}

const locationSchema = new Schema<Location>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

const eventSchema = new Schema<Event>({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  organizer: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: locationSchema, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

eventSchema.pre<Event>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const EventModel = model<Event>("Event", eventSchema);

export { EventModel, Event };
