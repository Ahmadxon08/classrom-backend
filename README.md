# Classroom Project

This project is a Node.js application built with TypeScript that connects to a Neon Postgres database using Neon Serverless and Drizzle ORM. It provides a simple CRUD interface for managing users in a `demo_users` table.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd classroom
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` template and fill in your database connection details.

## Configuration

The project uses the following environment variables defined in the `.env` file:

- `DATABASE_URL`: The connection string for your Neon Postgres database.

Make sure to configure the `drizzle.config.ts` file according to your database schema and migration settings.

## Usage

To start the server, run:
```
npm run start
```

The server will be running at `http://localhost:8000`.

## API Endpoints

- `GET /`: Returns a welcome message.
- `POST /users`: Create a new user.
- `GET /users`: Retrieve all users.
- `GET /users/:id`: Retrieve a user by ID.
- `PUT /users/:id`: Update a user by ID.
- `DELETE /users/:id`: Delete a user by ID.

## License

This project is licensed under the MIT License.