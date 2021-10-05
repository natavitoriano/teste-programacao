import styled from "styled-components";

import { fontSize, device } from "../../styles/variables";

export const ContainerInput = styled.div`
    width: ${props => props.widthSmall? props.widthSmall : '100%'};
    display: flex;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    padding: 8px;
    border: solid 2px;
    font-size: ${fontSize.medium};
    border-radius: 10px;
    color: ${props => props.color};
    border: solid 2px ${props => props.color};
    align-items: center;
    &:focus-within{
        color:  ${props => props.readonly ? '': 'var(--primary-color)'};
        border: ${props => props.readonly ? '': 'solid 2px var(--primary-color)'};
    }

    @media(min-width: ${device.medium}){
        font-size: ${fontSize.large};
        width: ${props => props.widthMedium? props.widthMedium : '100%'};
    }

    @media(min-width: ${device.large}){
        font-size: ${fontSize.veryLarge};
        width: ${props => props.widthLarge? props.widthLarge: '100%'};
    }
`

export const CustomInput = styled.input`
    border: none;
    font-size: ${fontSize.small};
    outline: 0;
    margin-left: ${props => props.textAlign? '0px': '10px'};
    width: 100%;
    background-color: transparent;
    text-align: ${props => props.textAlign};
    @media(min-width: ${device.medium}){
        font-size: ${fontSize.medium};
    }

    @media(min-width: ${device.large}){
        font-size: ${fontSize.medium};
    }
`
