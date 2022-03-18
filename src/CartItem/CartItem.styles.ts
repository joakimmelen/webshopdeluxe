import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid orange;
    padding-bottom: 10px;
    padding-top: 10px;
    height: 100px;
    overflow-x: hidden;
    overflow: hidden;
    overflow-y: hidden;

    div {
        flex: 1;
    }
    .information, .buttons {
        display: flex;
        justify-content: space-between;
        
    }
    img {
        max-width: 50px;
        max-height: 100px;
        object-fit: contain;
        margin-left: 30px;
        
    }
`