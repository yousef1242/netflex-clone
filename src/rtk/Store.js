

import { configureStore } from '@reduxjs/toolkit'
import   AddTofavorite  from './DetailsSlice'

export default configureStore({
  reducer: {
    addtofavorite:AddTofavorite,
  },
})