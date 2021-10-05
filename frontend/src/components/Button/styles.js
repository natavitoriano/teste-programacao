import styled from 'styled-components';

import { device, fontSize } from '../../styles/variables';

export const Btn = styled.button`
    color: var(--white);
    background-color: var(--primary-color);
    font-size: ${fontSize.verySmall};
    font-weight: 700;
    width: ${props => props.width? props.width: '100%'};
    border: none;
    border-radius: 10px;
    padding: 15px 0px;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);

    &:hover{
        opacity: 0.9;
        cursor: pointer;
    }

    &:active{
        transform: scale(0.98);
        box-shadow: none;
    }

    @media(min-width: ${device.medium}){

    }

    @media(min-width: ${device.large}){
        font-size: ${fontSize.small};
    }

`
