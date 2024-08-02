import { AxiosError, AxiosResponse } from "axios";
import { Request, Response } from "express";

import Api from "Api"; // Custom API module for making requests
import { ErrorHandler } from "ErrorHandling"; // Custom error-handling module
import { cache } from "utils"; // Custom caching utility

import Pokemon from "Api/Pokemon"; // Custom module for Pokémon-related API endpoints

// Define the route handler function to get all Pokémon with pagination
export const getAllPokemon = async (
  req: Request<unknown, unknown, unknown, { page: number; pageSize: number }>,
  res: Response
) => {
  try {
    // Extract pagination parameters from the query, with default values
    const { page = 1, pageSize = 20 } = req.query;

    console.log({
      page,
      pageSize
    });

    // Generate a cache key for the National Pokédex
    const cacheKey = "national-pokedex";

    // Try to retrieve the cached National Pokédex data
    let nationalPokedex: PokemonEntry[] | undefined = cache.get(cacheKey);

    // If the National Pokédex is not cached, fetch it from the API
    if (!nationalPokedex) {
      // Prepare the request to get all Pokémon entries
      const request = Pokemon.getAllPokemon();

      // Perform the API request and get the response
      const response: AxiosResponse<Nationapokemon> =
        await Api.performRequest(request);

      // Extract the Pokémon entries from the response data
      const { data } = response;

      nationalPokedex = data.pokemon_entries;

      // Cache the entire National Pokédex for future requests
      cache.set(cacheKey, nationalPokedex);
    }

    // Calculate the starting index for pagination
    const startIndex = (+page - 1) * +pageSize;

    // Slice the cached data to get only the entries for the current page
    const paginatedData = nationalPokedex.slice(
      startIndex,
      startIndex + +pageSize
    );

    console.log(paginatedData.length);

    // Calculate the total number of Pokémon and total pages
    const total = nationalPokedex.length;
    const totalPages = Math.ceil(total / +pageSize);

    // Send the paginated data along with pagination info and image URL details
    res.send({
      total: nationalPokedex.length,
      totalPages,
      page: +page,
      pageSize,
      data: paginatedData,
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      image_extension: ".png"
    });
  } catch (error) {
    // Handle any errors by passing them to the custom ErrorHandler
    ErrorHandler(error as AxiosError, res, req as unknown as Request);
  }
};

// TODO: GET POKEMON DETAILS
// TODO: SEACH POKEMON BASED ON Name or number
