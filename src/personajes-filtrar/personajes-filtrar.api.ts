import axios from "axios";
import { Character } from "../personajes.model";

export const filtrarPersonajes = async (
  nombre: string
): Promise<Character[]> => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/personajes?nombre_like=${nombre}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al filtrar los personajes");
  }
};
