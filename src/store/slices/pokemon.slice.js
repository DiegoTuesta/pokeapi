import { createSlice } from "@reduxjs/toolkit";
import { isLoading } from './loader.slice'
import axios from "axios";


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: [],
    reducers: {
        addPokemon: (state, action) =>{
            return action.payload
        }
    }
})

export const {addPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer

export const getPokemonThunk = () => dispatch => {
    dispatch(isLoading(true))

    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000`)
          .then((result) => {
            dispatch(addPokemon(result.data.results))
          })
          .catch(console.error)
          .finally( () => dispatch(isLoading(false)) )

}
export const getPokemonXTypeThunk = (type) => dispatch => {
    dispatch(isLoading(true))
    type === "0" ? dispatch( getPokemonThunk() ) :
    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    .then((result) => {
            let arr = [];
            result.data.pokemon.map((item) =>
            arr.push({ name: item.pokemon.name, url: item.pokemon.url }));
            dispatch(addPokemon(arr))
          })
          .catch(console.error)
          .finally( () => dispatch(isLoading(false)) )

}
