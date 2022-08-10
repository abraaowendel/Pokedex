import * as C from "./style"
import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../../contexts/Context";
import Info from "../../components/infoCard/Info";

const Pokemon = () => {
    const { listPokemons } = useContext(Context)
    const {idPoke} = useParams();
    const [currentPokemon, setCurrentPokemon] = useState(idPoke);
    return ( 
        <>
            {listPokemons &&
                <C.Container>
                    <Info data={listPokemons[currentPokemon - 1]}/>
                </C.Container>
            }
        </>
    );
}
 
export default Pokemon;