import styled from "styled-components";

import { device } from "../../styles/variables";

export const ContainerMain = styled.main`
    margin: 0px 0px 0px 0px;
    padding: 20px 20px;
    flex: 1;
    background-color: white;

    @media(min-width: ${device.medium}){
        margin: 0px 110px 0px 110px;
    }

    @media(min-width: ${device.large}){
        margin: 0px 110px 0px 110px;
    }
`
