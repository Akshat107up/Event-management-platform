# Event Management Platform

This is a basic Event Management Platform (EMP) built using Node.js, Mongoose, MongoDB, and TypeScript. It provides CRUD operations to manage events, including adding, updating, deleting, retrieving, and listing events.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [Project Structure](#project-structure)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/event-management-platform.git
    cd event-management-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the MongoDB server if it is not already running:
    ```bash
    mongod
    ```

2. Start the application:
    ```bash
    npm start
    ```



The server will start running at `http://localhost:3000`.

## API Endpoints

### Add a New Event

- **URL:** `/events`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "eventName": "Annual Tech Conference",
        "eventDate": "2024-08-15T09:00:00Z",
        "organizer": "John Doe",
        "email": "johndoe@example.com",
        "phone": "123-456-7890",
        "location": {
            "street": "123 Tech Street",
            "city": "Tech City",
            "state": "TC",
            "zip": "12345"
        }
    }
    ```
- **Response:**
    ```json
    {
        "_id": "60c72b2f9b1d4c5f8834c2b1",
        "eventName": "Annual Tech Conference",
        "eventDate": "2024-08-15T09:00:00Z",
        "organizer": "John Doe",
        "email": "johndoe@example.com",
        "phone": "123-456-7890",
        "location": {
            "street": "123 Tech Street",
            "city": "Tech City",
            "state": "TC",
            "zip": "12345"
        },
        "createdAt": "2024-07-09T09:00:00Z",
        "updatedAt": "2024-07-09T09:00:00Z"
    }
    ```

### Update an Existing Event

- **URL:** `/events/:id`
- **Method:** `PUT`
- **Request Body:**
    ```json
    {
        "eventName": "Updated Tech Conference",
        "eventDate": "2024-09-01T09:00:00Z",
        "organizer": "Jane Doe",
        "email": "janedoe@example.com",
        "phone": "098-765-4321",
        "location": {
            "street": "456 Updated Street",
            "city": "Updated City",
            "state": "UC",
            "zip": "54321"
        }
    }
    ```
- **Response:**
    ```json
    {
        "_id": "60c72b2f9b1d4c5f8834c2b1",
        "eventName": "Updated Tech Conference",
        "eventDate": "2024-09-01T09:00:00Z",
        "organizer": "Jane Doe",
        "email": "janedoe@example.com",
        "phone": "098-765-4321",
        "location": {
            "street": "456 Updated Street",
            "city": "Updated City",
            "state": "UC",
            "zip": "54321"
        },
        "createdAt": "2024-07-09T09:00:00Z",
        "updatedAt": "2024-07-09T09:00:00Z"
    }
    ```

### Delete an Event

- **URL:** `/events/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {}
    ```

### Retrieve an Event by Its ID

- **URL:** `/events/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "_id": "60c72b2f9b1d4c5f8834c2b1",
        "eventName": "Annual Tech Conference",
        "eventDate": "2024-08-15T09:00:00Z",
        "organizer": "John Doe",
        "email": "johndoe@example.com",
        "phone": "123-456-7890",
        "location": {
            "street": "123 Tech Street",
            "city": "Tech City",
            "state": "TC",
            "zip": "12345"
        },
        "createdAt": "2024-07-09T09:00:00Z",
        "updatedAt": "2024-07-09T09:00:00Z"
    }
    ```

### List All Events

- **URL:** `/events`
- **Method:** `GET`
- **Response:**
    ```json
    [
        {
            "_id": "60c72b2f9b1d4c5f8834c2b1",
            "eventName": "Annual Tech Conference",
            "eventDate": "2024-08-15T09:00:00Z",
            "organizer": "John Doe",
            "email": "johndoe@example.com",
            "phone": "123-456-7890",
            "location": {
                "street": "123 Tech Street",
                "city": "Tech City",
                "state": "TC",
                "zip": "12345"
            },
            "createdAt": "2024-07-09T09:00:00Z",
            "updatedAt": "2024-07-09T09:00:00Z"
        }
    ]
    ```

## Postman Collection

You can import the following JSON into Postman to test the API endpoints:

```json
{
  "info": {
    "name": "Event Management Platform",
    "_postman_id": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
    "description": "Collection for Event Management Platform API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Add New Event",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"eventName\": \"Annual Tech Conference\",\"eventDate\": \"2024-08-15T09:00:00Z\",\"organizer\": \"John Doe\",\"email\": \"johndoe@example.com\",\"phone\": \"123-456-7890\",\"location\": {\"street\": \"123 Tech Street\",\"city\": \"Tech City\",\"state\": \"TC\",\"zip\": \"12345\"}}"
        },
        "url": {
          "raw": "http://localhost:3000/events",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "events"
          ]
        }
      }
    },
    {
      "name": "Update Event",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"eventName\": \"Updated Tech Conference\",\"eventDate\": \"2024-09-01T09:00:00Z\",\"organizer\": \"Jane Doe\",\"email\": \"janedoe@example.com\",\"phone\": \"098-765-4321\",\"location\": {\"street\": \"456 Updated Street\",\"city\": \"Updated City\",\"state\": \"UC\",\"zip\": \"54321\"}}"
        },
        "url": {
          "raw": "http://localhost:3000/events/:id",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "events",
            ":id"
          ],
          "variable": [
            {
              "key": "id",
              "value": ""
            }
          ]
        }
      }
    },
    {
      "name": "Delete Event",
      "request": {
        "method": "DELETE",
        "url": {
          "raw": "http://localhost:3000/events/:id",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "events",
            ":id"
          ],
          "variable": [
            {
              "key": "id",
              "value": ""
            }
          ]
        }
      }
    },
    {
      "name": "Get Event by ID",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:3000/events/:id",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "events",
            ":id"
          ],
          "variable": [
            {
              "key": "id",
              "value": ""
            }
          ]
        }
      }
    },
    {
      "name": "List All Events",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:3000/events",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "events"
          ]
        }
      }
    }
  ]
}
