import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPilots = createAsyncThunk(
    'pilots/fetchpilots',async (url) => {
        try {
            const response  = await fetch(url)
            const data = await response.json()
            return data
        } catch (error) {
            return error
        }
    }
)

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Definir la acción asíncrona
// export const fetchMultipleData = createAsyncThunk(
//   'multipleData/fetch',
//   async (pilots) => {
//     try {
//       // Hacer múltiples solicitudes utilizando Promise.all
//       const responses = await Promise.all(
//         pilots.map(pilot => axios.get(`/api/data/${id}`))
//       );

//       // Mapear las respuestas para obtener solo los datos
//       const data = responses.map(response => response.data);

//       // Devolver los datos para que se almacenen en el estado
//       return data;
//     } catch (error) {
//       // Si ocurre un error, lanzarlo para que se maneje en la lógica de rechazo
//       throw error;
//     }
//   }
// );
