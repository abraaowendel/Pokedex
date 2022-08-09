import * as C from "./style"
import IconSearch from "../../assets/svgs/Search.svg"

const Search = () => {
    const handleSearchPokemon = () => {
      alert('A')
    }
    return (
        <C.Search onSubmit={handleSearchPokemon}>
          <C.SearchInput type="text" placeholder="Procurar"/>
          <C.SearchIcon src={IconSearch} onClick={handleSearchPokemon}/>
        </C.Search>
    );
}
 
export default Search;