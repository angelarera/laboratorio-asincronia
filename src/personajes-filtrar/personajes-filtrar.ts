import { filtrarPersonajes } from "./personajes-filtrar.api";
import { crearContenedorPersonaje } from "../personajes-listado/personajes-listado";

const limpiarListadoPersonajes = () => {
  const listado = document.querySelector(".listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    listado.innerHTML = "";
  } else {
    throw new Error("No se ha encontrado el contenedor listado");
  }
};

const pintarPersonajeFiltrado = async (nombre: string) => {
  const personajes = await filtrarPersonajes(nombre);
  const listado = document.querySelector(".listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    personajes.forEach((personaje) => {
      const elementoPersonaje = crearContenedorPersonaje(personaje);
      listado.appendChild(elementoPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor listado");
  }
};

const manejarFiltradoPersonaje = async (evento: Event) => {
  evento.preventDefault();

  const inputBuscador = document.querySelector(".buscador__input");

  if (inputBuscador && inputBuscador instanceof HTMLInputElement) {
    const nombreBuscado = inputBuscador.value.trim();

    limpiarListadoPersonajes();
    await pintarPersonajeFiltrado(nombreBuscado);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.querySelector(".buscador");

  if (buscador && buscador instanceof HTMLFormElement) {
    buscador.addEventListener("submit", manejarFiltradoPersonaje);
  }
});
