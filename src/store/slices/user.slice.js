import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: '',
    reducers: {
        addName: (state, action) =>{
            return action.payload
        }
    }
})

export const {addName} = userSlice.actions;
export default userSlice.reducer