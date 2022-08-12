import styled from 'styled-components';

export const Search = styled.form `
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #ccc;
    padding: 13px 15px;
    max-width: 1000px;
    width: 100%;
    margin: auto;
    @media screen and (max-width: 615px) {
      width: 100%;
      margin: 20px 0;
    }
`
export const SearchInput = styled.input `
   border: 0;
   background-color: transparent;
   width: 100%;
   height: 100%;
   outline: none;
   font-size: 1.1em;
`
export const SearchIcon = styled.img `
   cursor: pointer;
   margin-left: 5px;
`