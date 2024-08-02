import dotenv from "dotenv";
// Importing the dotenv package to load environment variables from a .env file.

dotenv.config();
// Loading environment variables from the .env file into process.env.

import { RequestOptions } from "./types/requestTypes";
// Importing a custom type that defines the structure of request options.

const BaseUrl = process.env.POKE_BASE_URL;
// Fetching the base URL for the Pokémon API from environment variables.

export default {
  // Exporting an object with two methods: getAllPokemon and getPokemonDetails.

  getAllPokemon: (): RequestOptions => {
    // Function to generate a request options object for fetching the national Pokedex.
    return {
      url: `${BaseUrl}/pokedex/national`
      // Constructs the URL using the base URL and the endpoint for the national Pokedex.
    };
  },

  getPokemonDetails: (name: string): RequestOptions => {
    // Function to generate a request options object for fetching details of a specific Pokémon.
    // Takes the Pokémon's name as a parameter.

    return {
      url: `${BaseUrl}/pokemon/${name}`
      // Constructs the URL using the base URL and the Pokémon's name.
    };
  }
};
