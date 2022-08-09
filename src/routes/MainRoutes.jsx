import { useRoutes } from "react-router-dom";
import Pokemons from "../pages/PokemonList/Pokemons";

export const MainRoutes = () => {
    return (
        useRoutes([
            {path:"/", element:<Pokemons/>},
        ])
    );
}
 
