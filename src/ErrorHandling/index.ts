import { AxiosError } from "axios"; // Importing AxiosError to handle errors that might occur during Axios HTTP requests.
import { Response, Request } from "express";
// Importing types from Express to type the request and response objects.

export const ErrorHandler = (
  error: AxiosError,
  res: Response,
  req: Request
) => {
  // Defining a function called `ErrorHandler` to handle errors occurring during API requests.
  // The function takes three parameters:
  // - `error`: The Axios error object that was caught.
  // - `res`: The Express response object used to send a response to the client.
  // - `req`: The Express request object, providing details about the incoming request.

  console.log(req.body);
  // Logging the request body to the console for debugging purposes.

  const err = {
    status: error?.response?.status,
    // The HTTP status code from the Axios error response, if available.

    message: error.message,
    // The error message provided by Axios.

    url: req.url,
    // The URL of the request that caused the error.

    method: error?.config?.method,
    // The HTTP method (GET, POST, etc.) of the request that caused the error, if available.

    payload: req.body,
    // The payload (request body) that was sent with the request.

    headers: error?.config?.headers
    // The headers that were sent with the request, if available.
  };

  res.status(err.status || 500).send(err || "Something went wrong");
  // Sending an error response to the client.
  // The response includes the error details (status, message, URL, method, payload, and headers).
  // If the error status is unavailable, it defaults to a 500 Internal Server Error.
  // If no error details are available, it sends a generic message "Something went wrong".
};
