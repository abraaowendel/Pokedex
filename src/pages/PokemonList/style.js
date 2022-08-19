import styled from "styled-components";

export const Container = styled.div `
   display: flex;
   flex-direction: column;
   max-width: 1200px;
   margin: auto;
`
export const Grid = styled.div `
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    min-height: 100vh;
`
export const LoadMore = styled.button `
    width: 150px;
    height: 50px;
    border-color: transparent;
    border-radius: 10px;
    margin: 45px auto 10px;
    cursor: pointer;
    font-size: 1.1em;
    background-color: #FF1A1A;
    color: #fff;
`