import { Character } from "./personajes.model";

const RUTA_BASE = "http://localhost:3000/";

const crearElementoImagen = (
  retrato: string,
  titulo: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = RUTA_BASE + retrato;
  imagen.alt = titulo;
  return imagen;
};

const crearElementoTitulo = (texto: string): HTMLHeadingElement => {
  const nombre = document.createElement("h2");
  nombre.textContent = texto;
  return nombre;
};

const crearSpanEtiqueta = (etiqueta: string): HTMLSpanElement => {
  const span = document.createElement("span");
  span.textContent = etiqueta + ": ";
  return span;
};

const crearElementoLi = (
  etiqueta: string,
  texto: string | string[]
): HTMLLIElement => {
  const contenidoLista = document.createElement("li");
  const spanEtiqueta = crearSpanEtiqueta(etiqueta);
  contenidoLista.appendChild(spanEtiqueta);

  if (Array.isArray(texto)) {
    contenidoLista.appendChild(document.createTextNode(texto.join(", "))); // Si el valor que le damos es un array, lo enseñamos como un párrafo, con cada elemento del array separado por comas. Lo he añadido con createTextNode porque si usaba textContent de nuevo sobreescribía el span de la etiqueta
  } else {
    contenidoLista.appendChild(document.createTextNode(texto));
  }

  return contenidoLista;
};

export const crearContenedorPersonaje = (
  personaje: Character
): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("personaje");

  const contenedorImagen = document.createElement("figure");
  elementoPersonaje.appendChild(contenedorImagen);
  contenedorImagen.classList.add("personaje__imagen");

  const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
  contenedorImagen.appendChild(imagen);

  const informacionPersonaje = document.createElement("div");
  elementoPersonaje.appendChild(informacionPersonaje);
  informacionPersonaje.classList.add("personaje__informacion");

  const nombre = crearElementoTitulo(personaje.nombre);
  informacionPersonaje.appendChild(nombre);

  const caracteristicasPersonaje = document.createElement("ul");
  informacionPersonaje.appendChild(caracteristicasPersonaje);

  const apodo = crearElementoLi("Apodo", personaje.apodo);
  caracteristicasPersonaje.appendChild(apodo);

  const especialidad = crearElementoLi("Especialidad", personaje.especialidad);
  caracteristicasPersonaje.appendChild(especialidad);

  const habilidades = crearElementoLi("Habilidades", personaje.habilidades);
  caracteristicasPersonaje.appendChild(habilidades);

  return elementoPersonaje;
};
