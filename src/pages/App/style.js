import styled from "styled-components";
import bg from "../../assets/img/background.jpg"

export const Container = styled.div `
   display: flex;
   flex-direction: column;
`
export const Main = styled.main `
   padding: 40px 20px;
   background-color: #F7F7F7;
   min-height: 100vh;
   @media screen and (max-width: 615px) {
      padding: 20px;
    }
`