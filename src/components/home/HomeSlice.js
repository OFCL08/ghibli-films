import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filmData: [],
  filteredFilms: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    loadFilteredFilms: (state, action) => {
      state.filteredFilms = action.payload;
    },
    loadFilms: (state, action) => {
      state.filmData = action.payload;
    },
  },
})

export const { loadFilms, loadFilteredFilms } = homeSlice.actions

export default homeSlice.reducer;
