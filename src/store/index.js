import { configureStore } from "@reduxjs/toolkit";
import user from './slices/user.slice'
import loader from "./slices/loader.slice";
import pokemon from "./slices/pokemon.slice";
import dark from './slices/dark.slice'

export default configureStore({
    reducer: {
        user,
        loader,
        pokemon,
        dark
    }
})