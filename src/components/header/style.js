import styled from 'styled-components';

export const Header = styled.header`
    background-color: #F7F7F7;
    padding: 30px 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 615px) {
        flex-direction: column;
        padding: 30px 20px 0;
    }
`;
export const Title = styled.h2`
    font-size: 2.5em;
    margin: 0 10px;
    color: #212121;
`;
export const Image = styled.img`
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    z-index: 2;
`;



