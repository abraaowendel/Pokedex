export const FormatID = (id) => {
    if(id >= 100 && id < 1000){
        return `0${id}`
    }
    else if (id < 10){
        return `000${id}`
    }
    else if (id < 100){
        return `00${id}`
    }
    else{
        return id
    }
}