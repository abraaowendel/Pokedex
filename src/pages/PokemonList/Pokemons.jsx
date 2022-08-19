import * as C from "./style"
import { useContext  } from 'react'

import { Card } from '../../components/cards/Card'
import Loading from "../../components/loading/Loading"
import { Link } from "react-router-dom"
import { Context } from "../../contexts/Context"

const Pokemons =  () => {
    const {listPokemons, current, setCurrent, fetchAPI} = useContext(Context)

    const handleLoadMore = async () => {
        if(current != 906){
            await fetchAPI(current + 200)
            return setCurrent(current + 200)
        }
        return alert('Isso é tudo pessoal')

    }

    return (
        <>
        {listPokemons.length == 0 &&
            <Loading/>
        }

        {listPokemons &&
            <C.Container>
                <C.Grid>
                    {listPokemons.map((item, key) => (
                        <Link to={`/${item.id}`} style={{textDecoration: "none"}} key={key}>
                            <Card data={item}/>
                        </Link>
                    ))}
                </C.Grid>
                {listPokemons.length > 0 && 
                   <C.LoadMore onClick={handleLoadMore}>Carregar mais</C.LoadMore>
                }
            </C.Container>
        }
        </>
    );
}
 
export default Pokemons;