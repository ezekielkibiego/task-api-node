# Task Management API

This is a simple Task Management API built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on tasks.

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed
- Fetch all tasks or a single task by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables
- cors for handling cross-origin requests

## Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ezekielkibiego/task-api-node.git
    
    cd task-api
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Setup Environment Variables**

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tasksDB?retryWrites=true&w=majority
    ```

    Replace `<username>` and `<password>` with your actual MongoDB credentials.

4. **Start the Server**

    ```bash
    npm start
    ```

## API Endpoints

1. **Get All Tasks**

    - **Request:**

        ```http
        GET /api/tasks
        ```

    - **Response:**

        ```json
        [
          {
            "_id": "67c8cdc89b094c7a954e3a71",
            "title": "Complete project",
            "description": "Finish the API development",
            "completed": false,
            "createdAt": "2024-03-06T10:00:00.000Z"
          }
        ]
        ```

2. **Get Task by ID**

    - **Request:**

        ```http
        GET /api/tasks/:id
        ```

    - **Response:**

        ```json
        {
          "_id": "67c8cdc89b094c7a954e3a71",
          "title": "Complete project",
          "description": "Finish the API development",
          "completed": false,
          "createdAt": "2024-03-06T10:00:00.000Z"
        }
        ```

3. **Create a Task**

    - **Request:**

        ```http
        POST /api/tasks
        Content-Type: application/json
        {
          "title": "Write documentation",
          "description": "Create a README file"
        }
        ```

    - **Response:**

        ```json
        {
          "_id": "67c8cdc89b094c7a954e3a72",
          "title": "Write documentation",
          "description": "Create a README file",
          "completed": false,
          "createdAt": "2024-03-06T10:05:00.000Z"
        }
        ```

4. **Update a Task**

    - **Request:**

        ```http
        PATCH /api/tasks/:id
        Content-Type: application/json
        {
          "completed": true
        }
        ```

    - **Response:**

        ```json
        {
          "_id": "67c8cdc89b094c7a954e3a72",
          "title": "Write documentation",
          "description": "Create a README file",
          "completed": true,
          "updatedAt": "2024-03-06T10:10:00.000Z"
        }
        ```

5. **Delete a Task**

    - **Request:**

        ```http
        DELETE /api/tasks/:id
        ```

    - **Response:**

        ```json
        {
          "message": "Task deleted successfully"
        }
        ```

## Running in Development Mode

To run the server in development mode with hot-reloading, use:

```bash
npm run dev
```

## License

This project is licensed under the MIT License.