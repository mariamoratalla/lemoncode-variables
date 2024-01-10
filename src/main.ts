interface GrupoMusical {
  nombre: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

const popRock: string = "🎵Pop Rock";
const rock: string = "🎸Rock";
const hardRock: string = "🤘Hard Rock";
const clasica: string = "🎼Clásica";

const grupoA: GrupoMusical = {
  nombre: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  genero: popRock,
};

const grupoB: GrupoMusical = {
  nombre: "Queen",
  añoFundacion: 1970,
  activo: false,
  genero: rock,
};

const grupoC: GrupoMusical = {
  nombre: "AC DC",
  añoFundacion: 1973,
  activo: true,
  genero: hardRock,
};

const grupoD: GrupoMusical = {
  nombre: "Ludwing van Beethoven",
  añoFundacion: 1770,
  activo: false,
  genero: clasica,
};

const grupoE: GrupoMusical = {
  nombre: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  genero: rock,
};
