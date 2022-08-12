import styled from 'styled-components';
import bg from "../../assets/svgs/Pokeball.svg"
import Back from "../../assets/svgs/arrow-left.svg"

export const Item = styled.div`
    position: relative;
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
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    min-height: 200px;
`;
export const ButtonBack = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
`;
export const SideLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const SideRigth = styled.div`
    
`;
export const IconBack = styled.img`
    
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: capitalize;
    margin-left: 15px;
    font-size: 1.6em;
`;

export const Id = styled.h4`
    color: #fff;
`;

export const ItemMain = styled.div`
    position: relative;
`;
export const Image = styled.img`
    height: 200px;
    position: absolute;
    left: 120px;
    bottom: -70px;
`;
export const TypeImage = styled.img`
    margin: 5px;
`;
export const ItemAbout = styled.div`
    flex: 1;
    background-color: #fff;
    margin: 0 6px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 294px;
`;
export const ItemAboutTypes = styled.div`
    display: flex;
    justify-content: center;
`;
export const AboutTitle = styled.h5`
    color: ${(props) => props.color};
`;

export const AboutPhysical = styled.div`
    display: flex;
`;
export const AboutPhysicalItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 100px;
    margin-bottom: 20px;
    &:nth-child(2){
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
`;
export const AboutItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 25px;
`;
export const AboutItemMoves = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    padding: 0 25px;

`;
export const AboutItemIcon = styled.img`
    height: 20px;
    margin-right: 10px;
`;
export const AboutItemResult = styled.div`
    
`;
export const AboutItemTitle = styled.h6`
    color: #8C8C8C;
`;
export const Preferences = styled.div`
    
`;
export const BaseStats = styled.div`
    display: flex;
`;





