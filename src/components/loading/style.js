import styled, { keyframes } from 'styled-components';


const animationRotate = keyframes` to {transform: rotate(360deg);}`

export const Loading = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #F8F8F8;
    img{
        animation: ${animationRotate} .5s linear infinite;
    }
`;

