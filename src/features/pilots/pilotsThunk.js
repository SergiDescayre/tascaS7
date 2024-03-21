import { createAsyncThunk } from "@reduxjs/toolkit";

// Definir la acción asíncrona
export const fetchPilots = createAsyncThunk(
  'pilots/fetchPilots',
  async (pilots) => {
    try {
      // Hacer múltiples solicitudes utilizando Promise.all
      const responses = await Promise.all(
        pilots.map( async (pilot) => {
            const res = await fetch(pilot)
            const responses = await res.json()
            return responses
        })
      );

      // Mapear las respuestas para obtener solo los datos
      const data = responses.map(response => response);

      // Devolver los datos para que se almacenen en el estado
      return data;
     
    } catch (error) {
      // Si ocurre un error, lanzarlo para que se maneje en la lógica de rechazo
      throw error;
    }
  }
);
