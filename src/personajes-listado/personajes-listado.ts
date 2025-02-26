import { crearContenedorPersonaje } from "../personajes.helpers";
import { obtenerPersonajes } from "./personajes-listado.api";

export const pintarPersonaje = async () => {
  const personajes = await obtenerPersonajes();
  const listado = document.querySelector("#listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    personajes.forEach((personaje) => {
      const contenedorPersonaje = crearContenedorPersonaje(personaje);
      listado.appendChild(contenedorPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor listado");
  }
};
