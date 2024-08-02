declare namespace NodeJS {
  // Declares a custom namespace for Node.js that allows us to extend the built-in types.

  interface ProcessEnv {
    // Extends the ProcessEnv interface, which represents the environment variables available on `process.env`.

    NODE_ENV: "development" | "production" | "test";
    // Defines the `NODE_ENV` environment variable, which can be one of three specific string values: "development", "production", or "test".

    PORT?: string;
    // Defines the `PORT` environment variable as an optional string.
    // This is often used to specify the port number the server should listen on.

    SECRET_KEY: string;
    // Defines the `SECRET_KEY` environment variable as a required string.
    // This might be used for encryption, signing tokens, or other security-related functions.

    POKE_BASE_URL: string;
    // Defines the `POKE_BASE_URL` environment variable as a required string.
    // This would be the base URL for the Pokémon API used in the application.
  }
}
