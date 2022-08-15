import * as C from "./style"
import { useNavigate } from "react-router-dom";

import { FormatID } from "../../utils/FormatID";
import { SwitchBgColor } from "../../utils/SwitchBgColor";
import { SwitchTypes } from "../../utils/SwitchTypes";

import Stats from "./baseStats/Stats"

import Back from "../../assets/svgs/arrow-left.svg"
import Height from "../../assets/svgs/height.svg"
import Weight from "../../assets/svgs/weight.svg"

export const Info = (props) => {

    const {data} = props;
    const navigate = useNavigate();
    const color = SwitchBgColor(data.types[0].type.name)

    const handleBack = () => {
        navigate(-1)
    }
   
    return (
        <C.Item color={color}> 
            <C.SideLeft color={color}>

                <C.ButtonBack onClick={handleBack}>
                    <C.IconBack src={Back} alt="" />
                </C.ButtonBack>

                <C.Image src={data.sprites.other["official-artwork"].front_default} alt={data.species.name} />
                
                <C.About>
                    <C.Title>{data.name}</C.Title>
                    <C.Id>#{FormatID(data.id)}</C.Id>
                    <C.AboutTypes>
                        {data.types.map((item, key) => (
                            <C.TypeImage src={SwitchTypes(item.type.name)} key={key} alt={data.species.name} />
                        ))}
                    </C.AboutTypes>
                </C.About>

            </C.SideLeft>

            <C.SideRigth>

                <C.SideRigthTop>

                    <C.AboutTitle>About</C.AboutTitle>

                    <C.Health>

                        <C.HealthItem>
                            <C.HealthDescription>
                                <img src={Weight} alt="" />
                                <p>{data.weight / 10}kg</p>
                            </C.HealthDescription>
                            <C.HealthTitle>
                                Weight
                            </C.HealthTitle>
                        </C.HealthItem>

                        <C.HealthItem>
                            <C.HealthDescription>
                                <img src={Height} alt="" />
                                <p>{data.height / 10}m</p>
                            </C.HealthDescription>
                            <C.HealthTitle>
                                Height
                            </C.HealthTitle>
                        </C.HealthItem>

                        <C.HealthItem>
                            <C.HealthAbilities>
                                {data.abilities.map((item, key) => (  
                                    <p key={key}>{item.ability.name}</p>
                                ))}
                            </C.HealthAbilities>
                            <C.HealthTitle>
                                Moves
                            </C.HealthTitle>
                        </C.HealthItem>

                    </C.Health>

                </C.SideRigthTop>

                <C.SideRigthBottom>

                    <C.AboutTitle>Base Stats</C.AboutTitle>

                    <C.BaseStats>
                        {data.stats.map((item,key) => (
                          <Stats title={item.stat.name} data={item.base_stat} color={color} key={key} />
                        ))}
                    </C.BaseStats>

                </C.SideRigthBottom>
            </C.SideRigth>
            
        </C.Item>
    );
}
 
export default Info;