import styled from "styled-components";

import { device, fontSize } from "../../styles/variables";

export const Head = styled.header`
    display: flex;
    background-color: var(--black);
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    height: 100px;
    list-style: none;

    li{
        height: 100%;
    }

    a{
        color: var(--support);
        display: flex;
        align-items: center;
        padding: 0px 13px;
        font-size: ${fontSize.small};
        height: 100%;
        width: 100%;
        text-decoration: none;
        text-align: center;
        &:hover{
            color: var(--white);
            border-bottom: solid 4px var(--primary-color);
        }
        @media(min-width: ${device.medium}){
            padding: 0px 30px;
            font-size: ${fontSize.veryLarge};
        }

        @media(min-width: ${device.large}){

        }
    }


`
