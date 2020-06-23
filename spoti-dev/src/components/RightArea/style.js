import styled from "styled-components"


export const MainAria = styled.div`
    background-color: #1b1b1b;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    width: 82%;
    height: 140vh;
    position: relative;
    float: right;
    top: -565px;

    ::-webkit-scrollbar {
        height: 20px;
    }
        ::-webkit-scrollbar-thumb {
        background: #5a5a5a;
    }

` 

export const OverFlow = styled.div`
    margin-bottom: 40vh;
` 