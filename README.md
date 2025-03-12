# MyContacts Backend API

This is a backend API project for managing contacts, developed with Express.js and MongoDB.

## Project Structure

MyContacts Backend API
├── config
│   └── dbConnection.js
├── controllers
│   ├── contactController.js
│   └── userController.js
├── middleware
│   ├── errorHandler.js
│   └── validateTokenHandler.js
├── models
│   ├── contactModel.js
│   └── userModel.js
└── routes
|   ├── contactRoutes.js
|   └── userRoutes.js
├── .env
├── .gitignore
├── constants.js
├── package.json
├── server.js
## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Thecaiobr/contactAppBackendNodejs.git
    ```
2. Navigate to the project directory:
    ```sh
    cd contactAppNodeJs
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```
    CONNECTION_STRING=<your_mongodb_connection_string>
    _portPORT=<your_number>
    ACCESS_TOKEN_SECRET=<your_access_token_secret>
    ```

## Running the Project

1. Start the server:
    ```sh
    npm start
    ```
2. For development, you can use:
    ```sh
    npm run dev
    ```

## API Endpoints

### Contacts

- **GET /api/contacts**: Get all contacts (Private)
- **POST /api/contacts**: Create a new contact (Private)
- **GET /api/contacts/:id**: Get a contact by ID (Private)
- **PUT /api/contacts/:id**: Update a contact by ID (Private)
- **DELETE /api/contacts/:id**: Delete a contact by ID (Private)

### Users

- **POST /api/users/register**: Register a new user (Public)
- **POST /api/users/login**: Login a user (Public)
- **GET /api/users/current**: Get current user info (Private)

## Middleware

- **errorHandler**: Handles errors and sends appropriate responses.
- **validateTokenHandler**: Validates JWT tokens for protected routes.

## Models

- **Contact**: Defines the schema for contact documents in MongoDB.
- **User**: Defines the schema for user documents in MongoDB.
