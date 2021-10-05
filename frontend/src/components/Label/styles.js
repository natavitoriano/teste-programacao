import styled from "styled-components";

import { device } from "../../styles/variables";

export const Text = styled.h1`
    font-size: ${props => props.small};
    text-align: ${props => props.align};
    color: ${props => props.color};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};
    margin-right: ${props => props.marginRight};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.textAlign};

    @media(min-width: ${device.medium}){
        font-size: ${props => props.medium};
    }

    @media(min-width: ${device.large}){
        font-size: ${props => props.large};
    }
`
