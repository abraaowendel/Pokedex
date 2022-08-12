import * as C from "./style"
import { useContext, useEffect, useState } from 'react'


import { Card } from '../../components/cards/Card'
import Loading from "../../components/loading/Loading"
import { Link } from "react-router-dom"
import { Context } from "../../contexts/Context"
import Search from "../../components/search/Search"

const Pokemons = () => {
    const {listPokemons} = useContext(Context)
    
    return (
        <>
        {!listPokemons &&
            <Loading/>
        }
          {listPokemons &&
            <C.Container>
                <Search/>
                <C.Grid>
                    {listPokemons.map((item, key) => (
                        <Link to={`/pokemon/${item.id}`} style={{textDecoration: "none"}} key={key}>
                            <Card data={item}/>
                        </Link>
                    ))}
                </C.Grid>
            </C.Container>
          }
        </>
    );
}
 
export default Pokemons;