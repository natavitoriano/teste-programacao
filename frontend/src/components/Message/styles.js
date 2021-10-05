import styled from "styled-components";

import { device } from "../../styles/variables";

import { BiErrorAlt, BiError } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const ErrorIcon = styled(BiErrorAlt)`
    color: white;
    font-size: 1.4rem;
    color: rgb(205, 0, 0);
`

export const WarningIcon = styled(BiError)`
    color: white;
    font-size: 1.4rem;
    color: rgb(206, 192, 0);
`

export const SuccessIcon = styled(AiOutlineCheckCircle)`
    color: white;
    font-size: 1.4rem;
    color: rgb(0, 150, 0);
`

export const ContainerMessage = styled.div`
    display: ${props => props.visible === 'visible' ? 'flex': 'none'} ;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    position: fixed;
    z-index: 9999;
    width: 70%;
    top: 10px;
    right: 10px;
    background-color: ${props => props.msgType === 'error' ? 'rgb(205, 0, 0, 0.2)':
    props.msgType === 'success' ? 'rgb(0, 169, 0, 0.1)':
    'rgb(206, 192, 0, 0.2)'};
    animation-name: in;
    animation-duration: 1s;

    @keyframes in {
        from {margin-top: -200px}
        to {margin-top: 0px}
    }

    transition: ease 3s;

    @media(min-width: ${device.medium}){
        width: 50%;
    }

    @media(min-width: ${device.large}){
        width: 50%;
    }
`
export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.2rem;
`
