

import { createSlice } from '@reduxjs/toolkit'

export const DetailsSlice = createSlice({
  name: 'DetailsSlice',
  initialState: [],
  reducers: {
    AddTofavorite: (state,action) => {
      state.push(action.payload)
    },
    removeone: (state,action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddTofavorite,removeone } = DetailsSlice.actions

export default DetailsSlice.reducer