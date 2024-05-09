export interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      name: string;
      url: string;
    }[];
  }
  
  interface Stat {
    name: string;
    url: string;
  }
  
  interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: Stat;
  }
  
  interface PokemonAbility {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  interface PokemonSprites {
    sprites: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      official_artwork: {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions: {
      [generation: string]: {
        [game: string]: {
          back_default: string | null;
          back_gray: string | null;
          back_transparent: string | null;
          front_default: string | null;
          front_gray: string | null;
          front_transparent: string | null;
        };
      };
    };
    generation: {
      [generation: string]: {
        [game: string]: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
    };
  }
  
  export interface PokemonType{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  export interface PokemonDetails {
    id: number;
    name: string;
    abilities: PokemonAbility[];
    height: number;
    weight: number;
    stats: PokemonStat[];
    sprites: PokemonSprites;
    types: PokemonType[]
    // Add more properties as needed
  }
  
  