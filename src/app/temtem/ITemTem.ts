export interface ITemTem {
  number: number;
  name: string;
  types: string[];
  portraitWikiUrl: string;
  lumaPortraitWikiUrl: string;
  wikiUrl: string;
  stats: { [key: string]: number };
  traits: Trait[];
  details: Details;
  techniques: Technique[];
  trivia: string[];
  evolution: Evolution;
  wikiPortraitUrlLarge: string;
  lumaWikiPortraitUrlLarge: string;
  locations: Location[];
  icon: string;
  lumaIcon: string;
  genderRatio: GenderRatio;
  catchRate: number;
  hatchMins: number;
  tvYields: { [key: string]: number };
  gameDescription: string;
  wikiRenderStaticUrl: string;
  wikiRenderAnimatedUrl: string;
  wikiRenderStaticLumaUrl: string;
  wikiRenderAnimatedLumaUrl: string;
  renderStaticImage: string;
  renderStaticLumaImage: string;
  renderAnimatedImage: string;
  renderAnimatedLumaImage: string;
  weaknesses: Weaknesses;
}

export interface Details {
  height: Height;
  weight: Weight;
}

export interface Height {
  cm: number;
  inches: number;
}

export interface Weight {
  kg: number;
  lbs: number;
}

export interface Evolution {
  evolves: boolean;
  stage?: number;
  evolutionTree?: EvolutionTree[];
  type?: string;
  from?: EvolutionTree | null;
  to?: EvolutionTree | null;
  number?: number;
  name?: string;
  level?: number;
  trading?: boolean;
  traits?: string[];
  traitMapping?: { [key: string]: string };
  description?: string;
}

export interface EvolutionTree {
  stage: number;
  number: number;
  name: string;
  level: number;
  type: string;
  trading: boolean;
  traits: string[];
  traitMapping: { [key: string]: string };
  description?: string;
}

export interface GenderRatio {
  male: number;
  female: number;
}

export interface Location {
  location: string;
  place: string;
  note: string;
  island: string;
  frequency: string;
  level: string;
  freetem: Freetem;
}

export interface Freetem {
  minLevel: number;
  maxLevel: number;
  minPansuns: number | null;
  maxPansuns: number | null;
}

export enum Island {
  Arbury = 'Arbury',
  Cipanku = 'Cipanku',
  Deniz = 'Deniz',
  Kisiwa = 'Kisiwa',
  Omninesia = 'Omninesia',
  Tucma = 'Tucma',
}

export interface Technique {
  name: string;
  source: string;
  levels?: number;
}

export interface Trait {
  name?: string;
  wikiUrl?: string;
  description?: string;
  effect?: string;
}

export enum TypeElement {
  Crystal = 'Crystal',
  Digital = 'Digital',
  Earth = 'Earth',
  Electric = 'Electric',
  Fire = 'Fire',
  Melee = 'Melee',
  Mental = 'Mental',
  Nature = 'Nature',
  Neutral = 'Neutral',
  Toxic = 'Toxic',
  Water = 'Water',
  Wind = 'Wind',
}

export interface Weaknesses {
  Neutral: number;
  Fire: number;
  Water: number;
  Nature: number;
  Electric: number;
  Earth: number;
  Mental: number;
  Wind: number;
  Digital: number;
  Melee: number;
  Crystal: number;
  Toxic: number;
}
