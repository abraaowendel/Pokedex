import styled from "styled-components";

export const Container = styled.div `
   display: flex;
   flex-direction: column;
   max-width: 1200px;
   margin: auto;
`
export const Grid = styled.div `
    margin-top: 50px;
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
`