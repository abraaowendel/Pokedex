import { useRoutes } from "react-router-dom";
import Pokemon from "../pages/PokemonInfo/Pokemon";
import Pokemons from "../pages/PokemonList/Pokemons";

export const MainRoutes = () => {
    return (
        useRoutes([
            {path:"/", element:<Pokemons/>},
            {path:"/pokemon/:idPoke", element:<Pokemon/>},
        ])
    );
}
 
