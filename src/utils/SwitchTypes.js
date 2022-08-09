import Rock from "../assets/svgs/types/Rock.svg"
import Ghost from "../assets/svgs/types/Ghost.svg"
import Steel from "../assets/svgs/types/Steel.svg"
import Water from "../assets/svgs/types/Water.svg"
import Grass from "../assets/svgs/types/Grass.svg"
import Psychic from "../assets/svgs/types/Psychic.svg"
import Ice from "../assets/svgs/types/Ice.svg"
import Dark from "../assets/svgs/types/Dark.svg"
import Fairy from "../assets/svgs/types/Fairy.svg"
import Normal from "../assets/svgs/types/Normal.svg"
import Fighting from "../assets/svgs/types/Fighting.svg"
import Flying from "../assets/svgs/types/Flying.svg"
import Poison from "../assets/svgs/types/Poison.svg"
import Ground from "../assets/svgs/types/Ground.svg"
import Bug from "../assets/svgs/types/Bug.svg"
import Fire from "../assets/svgs/types/Fire.svg"
import Electric from "../assets/svgs/types/Electric.svg"
import Dragon from "../assets/svgs/types/Dragon.svg"

export const SwitchTypes = (type) => {
    switch (type) {
        case "rock":
            return Rock
        case "ghost":
            return Ghost
        case "steel":
            return Steel
        case "water":
            return Water
        case "grass":
            return Grass
        case "psychic":
            return Psychic
        case "ice":
            return Ice
        case "dark":
            return Dark
        case "fairy":
            return Fairy
        case "normal":
            return Normal
        case "fighting":
            return Fighting
        case "flying":
            return  Flying
        case "poison":
            return Poison
        case "ground":
            return Ground
        case "bug":
            return Bug
        case "fire":
            return Fire
        case "electric":
            return Electric
        case "dragon":
            return Dragon
    }

    return Normal
}