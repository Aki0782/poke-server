import { Router } from "express"; // Importing the Router class from Express to create a new router instance for handling routes.

import { RoutesPaths } from "constants/routes"; // Importing the RoutesPaths enum, which defines the paths for different routes in the application.
import { getAllPokemon, getPokemonDetails } from "Controllers";
// Importing the controller functions that handle the logic for fetching all Pokémon and fetching Pokémon details.

const routes = Router();
// Creating a new router instance using Express's Router function.

routes.get(RoutesPaths.POKEMON, getAllPokemon);
// Defining a GET route for the path specified in RoutesPaths.POKEMON ("/pokemon").
// This route is handled by the getAllPokemon function, which will be invoked when this endpoint is accessed.

routes.get(RoutesPaths.SEARCH, getPokemonDetails);
// Defining a GET route for the path specified in RoutesPaths.SEARCH ("/search/:name").
// This route is handled by the getPokemonDetails function, which will be invoked when this endpoint is accessed.

export default routes;
// Exporting the routes so they can be used in other parts of the application (e.g., in the main server setup).
