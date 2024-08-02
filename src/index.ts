import cookieParser from "cookie-parser"; // Importing the cookie-parser middleware to parse cookies attached to the client request object.
import cors from "cors"; // Importing the CORS middleware to allow or restrict requested resources on a web server based on the origin of the request.
import dotenv from "dotenv"; // Importing the dotenv package to load environment variables from a .env file into process.env.
import express from "express"; // Importing Express, a web application framework for Node.js, to create the server and handle routing.
import rateLimit from "express-rate-limit"; // Importing the express-rate-limit middleware to limit repeated requests to public APIs and/or endpoints.
import helmet from "helmet"; // Importing Helmet, a middleware to help secure Express apps by setting various HTTP headers.
import morgan from "morgan";
// Importing Morgan, a middleware to log HTTP requests and errors for debugging and monitoring.

import routes from "routes";
// Importing the routes defined in your application.

dotenv.config();
// Loading environment variables from the .env file into process.env.

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 950 // Limit each IP to 950 requests per 5 minutes
});
// Setting up rate limiting to enhance security and prevent abuse by limiting the number of requests an IP can make within a given timeframe.

const app = express();
// Creating an instance of an Express application.

// Parsers and Middlewares
app.use(express.json());
// Middleware to parse incoming requests with JSON payloads.

app.use(helmet());
// Middleware to set various HTTP headers to secure the app, including protecting against well-known web vulnerabilities.

app.use(
  cors({
    origin: "*"
  })
);
// Middleware to enable CORS, allowing the server to accept requests from different origins.

app.use(limiter);
// Middleware to apply the rate limiting settings defined above to all incoming requests.

app.use(cookieParser());
// Middleware to parse cookies attached to client requests, making them available under req.cookies.

app.use(morgan("tiny"));
// Middleware to log HTTP requests and errors using Morgan, configured with the "tiny" format which is concise and includes essential information.

// Routes
app.use(routes);
// Mounting the application routes defined in the routes module to handle requests to the different endpoints.

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
// Starting the Express server, listening on the port specified in the environment variables (process.env.PORT).
// Logs a message to the console when the server is successfully running.
