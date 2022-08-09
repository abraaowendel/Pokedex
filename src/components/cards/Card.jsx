import { FormatID } from "../../utils/FormatID";
import { SwitchBgColor } from "../../utils/SwitchBgColor";
import { SwitchTypes } from "../../utils/SwitchTypes";
import * as C from "./style"

export const Card = (props) => {
    let {data} = props;
    return (
        <C.Item color={SwitchBgColor(data.types[0].type.name)}>
            <C.Id>#{FormatID(data.id)}</C.Id>
            <C.Types>
               {data.types.map((item, key) => (
                 <C.TypeImage src={SwitchTypes(item.type.name)} key={key} alt={data.species.name} />
               ))}
            </C.Types>
            <C.Images>
                <C.Image src={data.sprites.other.home.front_default} alt={data.species.name} />
            </C.Images>
            <C.Info>
                <C.Title>{data.species.name}</C.Title>
            </C.Info>
        </C.Item>
    );
}
 
export default Card;