export const SwitchBgColor = (type) => {
    switch (type) {
        case "rock":
            return "#B69E31"
        case "ghost":
            return "#70559B"
        case "steel":
            return "#B7B9D0"
        case "water":
            return "#6493EB"
        case "grass":
            return "#74CB48"
        case "psychic":
            return "#FB5584"
        case "ice":
            return "#9AD6DF"
        case "dark":
            return "#75574C"
        case "fairy":
            return "#E69EAC"
        case "normal":
            return "#AAA67F"
        case "fighting":
            return "#C12239"
        case "flying":
            return "#A891EC"
        case "poison":
            return "#A43E9E"
        case "ground":
            return "#DEC16B"
        case "bug":
            return "#A7B723"
        case "fire":
            return "#F57D31"
        case "electric":
            return "#F9CF30"
        case "dragon":
            return "#7037FF"
    }

    return "#AAA67F"
}