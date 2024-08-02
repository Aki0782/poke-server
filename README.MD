# POKE-SERVER

Pokemone server is a node application built using Express.js, TypeScript, and various essential middleware. This project is designed to provide a robust and scalable backend structure, with enhanced security, API request handling, and integration with popular utilities like Axios for HTTP requests and Mongoose for MongoDB interactions.

## Table of Contents

- [Getting Started]
- [Project Structure]
- [Scripts]
- [Technologies]
- [Code Quality]
- [License]

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22.19 or higher)

### Installation

1. RUN CODE: 
   ```bash
  yarn install && yarn start
  ```

poke-server/
│
├── src/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── Routes/
│   ├── Utils/
│   ├── index.ts
│   └── ...
├── dist/
│   └── ... (compiled output)
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
└── README.md

## Key Files and Directories

- **src/**: Contains the source code of the application.
  - **Controllers/**: Handles the business logic for various routes.
  - **Middlewares/**: Custom middleware functions for request processing.
  - **Routes/**: Defines the application’s API endpoints.
  - **Utils/**: Utility functions and helpers used across the application.
  - **index.ts**: The main entry point for the application.

- **dist/**: Contains the compiled JavaScript output after running the build command.

- **.eslintrc.js**: ESLint configuration file.

- **.prettierrc**: Prettier configuration file for code formatting.

- **package.json**: Contains project metadata, dependencies, and scripts.

- **tsconfig.json**: TypeScript configuration file.

## Scripts

The following scripts are available in the `package.json`:

- **start**: Runs the development server with hot-reloading using `tsx`.
  ```bash
  yarn start

- **build**: Compiles TypeScript files into JavaScript in the `dist/` directory.
  ```bash
  yarn build
  ```

  - **server**: Builds the project and then runs the production server.
  ```bash
  yarn server
  ```

  ## Technologies

### Backend

- **TypeScript**: A strongly typed programming language that builds on JavaScript, improving developer productivity and code quality.
- **Express**: A web framework for Node.js for building APIs and web applications.
- **Mongoose**: An ODM for MongoDB, providing schema-based data modeling.
- **Axios**: A promise-based HTTP client for making API requests.

### Middleware

- **Cors**: Middleware to enable CORS (Cross-Origin Resource Sharing).
- **Helmet**: Middleware to secure Express apps by setting various HTTP headers.
- **Morgan**: HTTP request logger middleware.
- **Express-rate-limit**: Middleware to limit repeated requests to public APIs.

### Tooling

- **TypeScript**: Adds static types to JavaScript, improving developer productivity and code quality.
- **ESLint**: A tool for identifying and fixing problems in JavaScript and TypeScript code.
- **Prettier**: A code formatter that enforces consistent style.
- **Node-cache**: A simple in-memory caching module for Node.js.

## Code Quality

### Linting and Formatting

This project uses ESLint and Prettier to maintain code quality. The configuration is set up to integrate with both JavaScript and TypeScript, enforcing consistent styling and best practices.


