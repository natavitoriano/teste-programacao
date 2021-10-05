import styled from "styled-components";

import { device } from "../../styles/variables";

export const Container = styled.main`
    background-color: var(--black);
`

export const BoxCenter = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 2px var(--black);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 9px 7px 5px rgba(0, 0, 0, 0.3);
    background-color: var(--white);

    @media(min-width: ${device.medium}){
        width: 500px;
    }

    @media(min-width: ${device.large}){
        width: 500px;
    }
`
