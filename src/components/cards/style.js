import styled from "styled-components";
import bg from "../../assets/svgs/Pokeball.svg"

export const Item = styled.div `
    background-image: url(${bg});
    background-position: center 50%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    min-height: 300px;
    cursor: pointer;
    background-color:  ${(props) => props.color};
    position: relative;
    padding: 20px 0 0;
`

export const Id = styled.h4`
    font-size: 1em;
    top: 15px;
    right: 20px;
    color: #fff;
    position: absolute;
`
export const Types = styled.div`
    position: absolute;
    top: 15px;
    left: 20px;
    width: 45px;
`
export const Info = styled.div`
    font-size: 1em;
    text-transform: capitalize;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    text-shadow: 1px 0 0 #f0f0;
`

export const Title = styled.h2`
    font-size: 1.2em;
    text-transform: capitalize;
    padding-bottom: 20px;
`
export const Images = styled.div `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img `
    height: 170px;
    margin: 5px 0;
    transition: all .5s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`
export const TypeImage = styled.img `
    border: 1px solid #5A85D4;
    border-radius: 13px;
`