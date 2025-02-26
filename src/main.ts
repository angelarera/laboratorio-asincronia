import { manejarFiltradoPersonaje } from "./personajes-filtrar/personajes-filtrar";
import { pintarPersonaje } from "./personajes-listado/personajes-listado";

document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.querySelector(".buscador");

  if (buscador && buscador instanceof HTMLFormElement) {
    buscador.addEventListener("submit", manejarFiltradoPersonaje);
  }

  pintarPersonaje();
});
