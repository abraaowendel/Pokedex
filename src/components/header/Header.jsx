import * as C from "./style"
import Logo  from "../../assets/svgs/logo.svg"
import Search from "../search/Search";

const Header = () => {
    return (  
        <C.Header>
            <C.Logo>
                <C.Image src={Logo} alt="" />
                <C.Title>Pokédex</C.Title>
            </C.Logo>
            <Search/>
        </C.Header>
    );
}
 
export default Header;