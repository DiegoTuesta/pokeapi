import { configureStore } from "@reduxjs/toolkit";
import user from './slices/user.slice'
import loader from "./slices/loader.slice";

export default configureStore({
    reducer: {
        user,
        loader,
    }
})