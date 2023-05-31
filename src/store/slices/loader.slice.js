import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: 'none',
    reducers: {
        changeDisplay: (state, action) =>{
            return action.payload
        }
    }
})

export const {changeDisplay} = loaderSlice.actions;
export default loaderSlice.reducer