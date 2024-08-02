import { AxiosError } from "axios"; // Importing AxiosError to handle errors that might occur during Axios HTTP requests.
import { Request, Response } from "express"; // Importing types from Express to type the request and response objects.

import Api from "Api"; // Importing the custom API handler for making HTTP requests.
import { ErrorHandler } from "ErrorHandling"; // Importing a custom error handling function to manage and respond to errors.
import { cache } from "utils";
// Importing a caching utility to store and retrieve data.

import Pokemon from "Api/Pokemon";
// Importing the Pokémon API utility for constructing request options.

export const getPokemonDetails = async (
  req: Request<{ name: string }>,
  res: Response
) => {
  // Defining an async function to get Pokémon details.
  // The request object is typed with a parameter "name", and the response object is typed with Response.

  const { name } = req.params;
  // Extracting the Pokémon name from the request parameters.

  cache.get(name);
  // Attempting to retrieve the Pokémon details from the cache using the Pokémon name as the key.

  try {
    const request = Pokemon.getPokemonDetails(name);
    // Constructing the API request using the Pokémon name.

    const response = await Api.performRequest(request);
    // Making the API request and awaiting the response.

    const { data } = response;
    // Extracting the data from the API response.

    cache.set(name, data);
    // Storing the retrieved Pokémon details in the cache for future requests.

    res.send(data);
    // Sending the Pokémon details as the response.
  } catch (error) {
    ErrorHandler(error as AxiosError, res, req as unknown as Request);
    // If an error occurs, handle it using the custom error handler.
    // The error is cast to AxiosError, and the request and response objects are passed to the handler.
  }
};
