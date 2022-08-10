import styled from 'styled-components';
import bg from "../../assets/svgs/Pokeball.svg"

export const Item = styled.div`
    min-height: 500px;
    min-width: 450px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position:  center;
    background-color: ${(props) => props.color};
    border-radius: 20px;
    h5{
        color: ${(props) => props.color};
    }
`;

export const ItemTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
`;
export const ButtonBack = styled.button`
    
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: capitalize;
`;

export const Id = styled.h4`
    color: #fff;
`;

export const ItemMain = styled.div`
    display: flex;
    justify-content: center;
`;
export const Image = styled.img`
    height: 250px;
`;
export const TypeImage = styled.img`
    
`;
export const ItemAbout = styled.div`
    background-color: #fff;
    margin: 0 6px;
    border-radius: 5px;
    border: 1px solid #000;
`;
export const ItemAboutTypes = styled.div`
    
`;
export const AboutTitle = styled.h5`
    color: ${(props) => props.color};
`;

export const AboutPhysical = styled.div`
    
`;
export const AboutPhysicalItem = styled.div`
    
`;
export const Preferences = styled.div`
    
`;
export const BaseStats = styled.div`
    display: flex;
`;





