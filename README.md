# Node and MongoDB CRUD Operation API

This is a comprehensive RESTful API demonstrating CRUD operations using Node.js, Express.js, and MongoDB.

## Features

- **Tours & Users**: Routing and schema models for tours and users management.
- **Security**: Password hashing via `bcryptjs` and cookie parser middleware.
- **Global Error Handling**: Standardized AppError utility and global error handling middleware.

## Prerequisites

- Node.js
- MongoDB

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `config.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=8000
   DATABASE=mongodb://localhost:27017/tours
   DATABASE_PASSWORD=your_db_password
   ```

3. Run the development server:
   ```bash
   npm start
   ```

## Running Tests

Execute tests using Node.js native test runner:
```bash
npm test
```
