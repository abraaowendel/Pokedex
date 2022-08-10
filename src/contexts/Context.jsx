import { useEffect, useState } from "react";
import { createContext } from "react";
import { API } from '../api/API'

export const Context = createContext("")

export const ContextProvider = ({ children }) => {
    const [listPokemons, setListPokemons] = useState();

    useEffect(() => {
        fetchAPI()
    },[])

    const fetchAPI = async () => {
        const json = await API.getAllPokemons()
        handleListPokemons(json);
    }

    const handleListPokemons = async (data) => {
        let list = []
        for (let i = 1; i < data.length; i++) {
            const json = await API.getPokemons(i)
            list.push(json)
        }
        return setListPokemons(list)
    }

    return(
        <Context.Provider value={{listPokemons}}>
            {children}
        </Context.Provider>
    )
}