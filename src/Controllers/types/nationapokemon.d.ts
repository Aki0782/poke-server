interface Nationapokemon {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: null;
  version_groups: [];
}

type Description = {
  description: string;
  language: Language;
};

type Language = {
  name: string;
  url: string;
};

type Name = {
  language: Language;
  name: string;
};

interface PokemonEntry {
  entry_number: number;
  pokemon_species: Language;
}
