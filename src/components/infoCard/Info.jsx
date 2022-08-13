import { FormatID } from "../../utils/FormatID";
import { SwitchBgColor } from "../../utils/SwitchBgColor";
import { SwitchTypes } from "../../utils/SwitchTypes";
import * as C from "./style"
import Stats from "./baseStats/Stats"
import Back from "../../assets/svgs/arrow-left.svg"
import Height from "../../assets/svgs/height.svg"
import Weight from "../../assets/svgs/weight.svg"
import { useNavigate } from "react-router-dom";
export const Info = (props) => {
    let {data} = props;
    const navigate = useNavigate();
    const color = SwitchBgColor(data.types[0].type.name)

    const handleBack = () => {
        navigate("/")
    }
    return (
        <C.Item color={color}> 
            <C.ItemTop>
                <C.SideLeft>
                    <C.ButtonBack onClick={handleBack}>
                        <C.IconBack src={Back} alt="" />
                    </C.ButtonBack>
                    <C.Title>{data.name}</C.Title>
                </C.SideLeft>
                <C.SideRigth>
                    <C.Id>#{FormatID(data.id)}</C.Id>
                </C.SideRigth>
            </C.ItemTop>
            <C.ItemMain>
                <C.Image src={data.sprites.other["official-artwork"].front_default} alt={data.species.name} />
            </C.ItemMain>
            <C.ItemAbout>
                <C.ItemAboutTypes>
                    {data.types.map((item, key) => (
                        <C.TypeImage src={SwitchTypes(item.type.name)} key={key} alt={data.species.name} />
                    ))}
                </C.ItemAboutTypes>
                <C.AboutTitle>About</C.AboutTitle>
                <C.AboutPhysical>
                    <C.AboutPhysicalItem>
                        <C.AboutItem>
                            <C.AboutItemIcon src={Weight}/>
                            <C.AboutItemResult>{data.weight / 10}kg</C.AboutItemResult>
                        </C.AboutItem>
                        <C.AboutItemTitle>Weight</C.AboutItemTitle>
                    </C.AboutPhysicalItem>
                    <C.AboutPhysicalItem>
                        <C.AboutItem>
                            <C.AboutItemIcon src={Height}/>
                            <C.AboutItemResult>{data.height / 10}m</C.AboutItemResult>
                        </C.AboutItem>
                        <C.AboutItemTitle>Height</C.AboutItemTitle>
                    </C.AboutPhysicalItem>
                    <C.AboutPhysicalItem>
                        <C.AboutItemMoves>
                            <C.AboutItemResult>{data.abilities[0].ability.name}</C.AboutItemResult>
                            <C.AboutItemResult>{data.abilities[1].ability.name}</C.AboutItemResult>
                        </C.AboutItemMoves>
                        <C.AboutItemTitle>Moves</C.AboutItemTitle>
                    </C.AboutPhysicalItem>
                </C.AboutPhysical>
                <C.BaseStats>
                    <Stats title="HP" data={data.stats[0].base_stat} color={color}/>
                    <Stats title="ATK" data={data.stats[1].base_stat} color={color}/>
                    <Stats title="DEF" data={data.stats[2].base_stat} color={color}/>
                    <Stats title="SATK" data={data.stats[3].base_stat} color={color}/>
                    <Stats title="SDEF" data={data.stats[4].base_stat} color={color}/>
                    <Stats title="SPD" data={data.stats[5].base_stat} color={color}/>
                </C.BaseStats>
            </C.ItemAbout>
            
        </C.Item>
    );
}
 
export default Info;