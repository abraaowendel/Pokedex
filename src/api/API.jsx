import axios from "axios"

const BASE_URL = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`

export const API = {
    getAllPokemons: async () => {
        const response = await axios.get(BASE_URL)
        return (await response.data)
    },
    getPokemons: async (id) => {
        const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        const response = await axios.get(BASE_URL)
        return (await response.data)
    }
}
