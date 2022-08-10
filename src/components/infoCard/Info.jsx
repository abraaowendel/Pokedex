import { FormatID } from "../../utils/FormatID";
import { SwitchBgColor } from "../../utils/SwitchBgColor";
import { SwitchTypes } from "../../utils/SwitchTypes";
import * as C from "./style"
import Stats from "../../pages/PokemonInfo/baseStats/Stats"

export const Info = (props) => {
    let {data} = props;
    console.log(data)
    return (
        <C.Item color={SwitchBgColor(data.types[0].type.name)}> 
            <C.ItemTop>
                <C.ButtonBack>Voltar</C.ButtonBack>
                <C.Title>{data.name}</C.Title>
                <C.Id>#{FormatID(data.id)}</C.Id>
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
                        
                    </C.AboutPhysicalItem>
                    <C.AboutPhysicalItem>
                        
                    </C.AboutPhysicalItem>
                </C.AboutPhysical>
                <C.Preferences>

                </C.Preferences>
                <C.BaseStats>
                    <Stats title="HP" data={data.stats[0].base_stat}/>
                    <Stats title="ATK" data={data.stats[1].base_stat}/>
                    <Stats title="DEF" data={data.stats[2].base_stat}/>
                    <Stats title="SATK" data={data.stats[3].base_stat}/>
                    <Stats title="SDEF" data={data.stats[4].base_stat}/>
                    <Stats title="SPD" data={data.stats[5].base_stat}/>
                </C.BaseStats>
            </C.ItemAbout>
            
        </C.Item>
    );
}
 
export default Info;