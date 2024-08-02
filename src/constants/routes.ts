export enum RoutesPaths {
  POKEMON = "/pokemon",
  SEARCH = "/search/:name"
}
// Exporting an enumeration (enum) called `RoutesPaths` that defines the common routes or paths used in the application.
// Each member of the enum is assigned a string value representing a specific route.

// - `POKEMON`: Represents the path to access the Pokémon list or details. This would typically route to a page displaying a list of Pokémon.
// - `SEARCH`: Represents the path to search for a specific Pokémon by name. The `:name` part is a dynamic segment, meaning that it will be replaced by the actual name of the Pokémon being searched for in the URL.
