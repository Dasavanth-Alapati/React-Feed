
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile:null,
}


const loginSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setprofile: (state,action) => {
      state.profile = action.payload;
    },
  }
});

export const {setprofile} = loginSlice.actions

export default loginSlice.reducer