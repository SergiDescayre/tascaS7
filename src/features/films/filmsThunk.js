import { createAsyncThunk } from "@reduxjs/toolkit";

// Definir la acción asíncrona
export const fetchFilms = createAsyncThunk(
    'film,fetchFilms',
    async (films) => {
        try {
            // Hacer múltiples solicitudes utilizando Promise.all
            const responses = await Promise.all(
                films.map(async (film) => {
                    const res = await fetch(film)
                    const responses = await res.json()
                   
                    return responses
                })
            )

            // Mapear las respuestas para obtener solo los datos
            const data = responses.map(response => response)
            
            // Devolver los datos para que se almacenen en el estado
            return data;

        } catch (error) {
            throw (error)
        }
    }
)