import styled from 'styled-components';
import bg from "../../assets/svgs/Pokeball.svg"
import Back from "../../assets/svgs/arrow-left.svg"

export const Item = styled.div`
    display: flex;
    min-width: 100%;
    border-radius: 20px;
    border: 1px solid ${(props) => props.color};
    h5{
        color: ${(props) => props.color};
        font-size: 1.1em;
    }
    @media screen and (max-width: 767px){
        flex-direction: column;
    } 
    
`;
export const SideLeft = styled.div `
    min-width: 375px;
    position: relative;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 20px 0 0 20px;
    background-color: ${(props) => props.color};
    @media screen and (max-width: 767px){
        align-items: center;
        min-width: 100%;
        border-radius: 20px 20px 0 0px;
    }
`

export const About = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`
export const AboutTypes = styled.div `
    
`

export const ButtonBack = styled.button`
    border: 0;
    position: absolute;
    left: 20px;
    top: 10px;
    background-color: transparent;
    cursor: pointer;
`;
export const IconBack = styled.img`
   
`;

export const Image = styled.img`
    height: 300px;
    margin-top: 15px;
    padding: 15px 15px 0;
    @media screen and (max-width: 767px){
        max-width: 250px;
        height: auto;
        padding: 0;
        margin: 20px 0 0;
    }
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: capitalize;
    font-size: 1.5em;
    margin-bottom: 10px;
`;

export const Id = styled.h4`
    color: #fff;
    position: absolute;
    right: 20px;
    top: 20px;
`;

export const TypeImage = styled.img`
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 15px;
`;
export const BaseStats = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SideRigth = styled.div `
    background-color: #fff;
    flex: 1;
    border-radius: 0 20px 20px 0px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media screen and (max-width: 767px){
        border-radius: 0 0 20px 20px;
    }
`
export const SideRigthTop = styled.div `
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const SideRigthBottom = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
export const AboutTitle = styled.h5`
    font-size: 1.2em;
    text-align: center;
    margin: 10px 0;
`;

export const Health = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 20px;
    @media screen and (max-width: 375px){
    }
`
export const HealthItem = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
   
    @media screen and (max-width: 375px){
        
    }
`
export const HealthDescription = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    p{
        margin: 0 10px;
    }
    img{
        height: 25px;
    }
    @media screen and (max-width: 375px){
      img{
        height: 20px;
      }
      p{
        font-size: 0.875em;
      }
    }
`
export const HealthAbilities = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 45px;
    p{
        text-transform: capitalize;
    }
    @media screen and (max-width: 375px){
      p{
        font-size: 0.875em;
      }
    }
    
`
export const HealthTitle = styled.h4 `
    color: #C5C5C5;
    font-weight: 100;
    margin-top: 5px;
    @media screen and (max-width: 375px){
      font-size: 0.9em;
    }
`   