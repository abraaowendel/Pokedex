import axios from "axios"

const BASE_URL = `https://pokeapi.co/api/v2/pokemon`

export const API = {
    getAllPokemons: async () => {
        const response = await axios.get(`${BASE_URL}/?limit=20&offset=5`)
        console.log(response.data.results)
        return (await response.data.results)
    },
    getPokemons: async (id) => {
        const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        const response = await axios.get(BASE_URL)
        return (await response.data)
    }
}
