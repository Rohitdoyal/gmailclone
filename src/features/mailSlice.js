import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen:false,
    selectedMessage:null
  },
 
  reducers: {

    //actions 
    openSendmessage: (state) => {
      state.sendMessageIsOpen=true;
    },

    closeSendmessage: (state) => {
      state.sendMessageIsOpen=false;
    },

    openmessage:(state,action)=>{
      state.selectedMessage= action.payload;
    },
    
  },
  
 
});

export const {openSendmessage, closeSendmessage,openmessage} = mailSlice.actions;
//selector
export const selectmail = (state) => state.mail.sendMessageIsOpen;
export const selectedmailon = (state) => state.mail.selectedMessage;

export default mailSlice.reducer;
