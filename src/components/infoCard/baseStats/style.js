import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 5px 10px;
    h4{
        color: ${(props) => props.color};
        border-right: 2px solid #ccc;
        min-width: 55px;
    }
    p{
        margin: 0 10px;
        min-width: 25px;
    }
    div{
        border: 1px solid ${(props) => props.color};
        width: 100%;
        position: relative;
        overflow-x: hidden;
        background-color: #cece;
        border-radius: 15px;
        span{
            position: absolute;
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            display: block;
            width: ${(props) => props.width}%;
            background-color: ${(props) => props.color};
        }
    }
    
`;

