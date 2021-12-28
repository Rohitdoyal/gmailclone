import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    value:null,
  },
 
  reducers: {

    //actions 
    signin: (state,action) => {
      state.value=action.payload;
    },

    signout: (state) => {
      state.value=null;
    },
 
  },
  
 
});

export const {signin,signout} = userSlice.actions;
//selector
export const selectuser = (state) => state.user.value;


export default userSlice.reducer;
