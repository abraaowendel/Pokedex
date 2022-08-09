import * as C from "./style"
import { useEffect, useState } from 'react'

import { API } from '../../api/API'

import { Card } from '../../components/cards/Card'
import Loading from "../../components/loading/Loading"


const Pokemons = () => {
    const [pokedex, setPokedex] = useState();
    const [listPokemons, setListPokemons] = useState();

    useEffect(() => {
        handleData()
    },[])

    const handleData = async () => {
        const json = await API.getAllPokemons()
        setPokedex(json.results)
        handleListPokemons(json.results);
    }

    const handleListPokemons = async (data) => {
        let list = []
        for (let i = 1; i < data.length; i++) {
            const json = await API.getPokemons(i)
            list.push(json)
        }
        return setListPokemons(list)
    }

    return (
        <>
        {!listPokemons &&
            <Loading/>
        }
          {listPokemons &&
            <C.Container>
                {listPokemons.map((item, key) => (
                   <Card data={item} key={key}/>
                ))}
            </C.Container>
          }
        </>
    );
}
 
export default Pokemons;