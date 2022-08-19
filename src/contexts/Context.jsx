import { useEffect, useState } from "react";
import { createContext } from "react";

const initialState = []

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [listPokemons, setListPokemons] = useState([])
    const [current, setCurrent] = useState(106)

    useEffect(() => {
        fetchAPI(current)
    }, []);

    const fetchAPI =  async (current) => {
       for (let index = initialState.length + 1; index < current; index++) {
           await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
                 .then((response) => response.json())
                 .then((json) => initialState.push(json))
         }
        return setListPokemons(initialState)    
    }

    return(
        <Context.Provider value={{listPokemons, current, setCurrent, fetchAPI}}>
            {children}
        </Context.Provider>
    )
}