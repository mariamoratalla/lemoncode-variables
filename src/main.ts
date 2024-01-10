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

const estilo =
  "font-weight: bold; font-size: 18px; background-color: lightgreen";

console.log(`%c${grupoA.nombre}`, estilo);
console.log(`Año de fundación: ${grupoA.añoFundacion}
Activo: ${grupoA.activo}
Género musical: ${grupoA.genero}`);

console.log(`%c${grupoB.nombre}`, estilo);
console.log(`Año de fundación: ${grupoB.añoFundacion}
Activo: ${grupoB.activo}
Género musical: ${grupoB.genero}`);

console.log(`%c${grupoC.nombre}`, estilo);
console.log(`Año de fundación: ${grupoC.añoFundacion}
Activo: ${grupoC.activo}
Género musical: ${grupoC.genero}`);

console.log(`%c${grupoD.nombre}`, estilo);
console.log(`Año de fundación: ${grupoD.añoFundacion}
Activo: ${grupoD.activo}
Género musical: ${grupoD.genero}`);

console.log(`%c${grupoE.nombre}`, estilo);
console.log(`Año de fundación: ${grupoE.añoFundacion}
Activo: ${grupoE.activo}
Género musical: ${grupoE.genero}`);
