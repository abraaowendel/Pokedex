import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(280px, 1fr));
    max-width: 1200px;
    margin: auto;
    gap: 20px;
`