import axios from "axios";
import { Character } from "../personajes.model";

export const obtenerPersonajes = async (): Promise<Character[]> => {
  try {
    const { data } = await axios.get("http://localhost:3000/personajes");
    return data;
  } catch (error) {
    throw new Error("Error al obtener los personajes");
  }
};
