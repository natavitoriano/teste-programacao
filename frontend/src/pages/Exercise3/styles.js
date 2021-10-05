import styled from "styled-components";

import { device } from "../../styles/variables";

export const Form = styled.form`
    width: 50vw;
`
export const BoxTotal = styled.div`
    margin-top: 20px;
    width: 80vw;
    border-radius: 10px;
    padding: 5px;
    border: solid 1px;
    box-shadow: 9px 7px 5px rgba(0, 0, 0, 0.3);

    @media(min-width: ${device.medium}){
        width: 50vw;
    }

    @media(min-width: ${device.large}){
        width: 50vw;
    }
`
