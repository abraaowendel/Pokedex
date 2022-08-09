import Pokeball from "../../assets/svgs/loading.svg";
import * as C from "./style"

const Loading = () => {
    return (
        <C.Loading>
            <img src={Pokeball} alt="Pokebola" />
        </C.Loading>
    );
}
 
export default Loading;