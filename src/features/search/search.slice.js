import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

//Slice reducer - Function that is responsible for updating a portion of the application state
const options = {
  name: 'search', //name of the slice
  initialState, //initial state for the search slice
  reducers: {
    /*
      This reducer takes the current state and an action
      Updates the search term property of the state with the payload of the action (which is the new search term)
    */
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
};

const searchSlice = createSlice(options);

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchTerm = (state) => state.search.searchTerm;
