
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile:null,
}


const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setprofile: (state,action) => {
      state.profile = action.payload;
    },
  }
});

export const {setprofile} = profileSlice.actions

export default profileSlice.reducer