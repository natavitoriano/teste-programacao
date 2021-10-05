import React from "react";

import { ContainerMessage, CloseButton, ErrorIcon, SuccessIcon, WarningIcon } from "./styles";

import { AiOutlineClose } from "react-icons/ai";
import { FlexRow } from "../../styles/styles";
import Label from "../Label";

import { fontSize } from "../../styles/variables";

const Message = props => {

    const closeMessage = () => {
        props.visible.setMsgVisible('hidden');
    }

    function typeMsg(){
        switch(props.msgType){
            case 'error':
                return <ErrorIcon />
            case 'success':
                return <SuccessIcon />
            case 'warning':
                return <WarningIcon />
            default:
                return <SuccessIcon />
        }
    }

    return (
        <ContainerMessage msgType={props.msgType} visible={props.visible.msgVisible}>
            <FlexRow align="center">
                {typeMsg()}
                <Label
                    small={fontSize.verySmall} medium={fontSize.small} large={fontSize.small}
                    marginLeft= '20px' color="var(--white)" fontWeight='100'>
                    {props.children}
                    </Label>
            </FlexRow>
            <CloseButton onClick={() => closeMessage()}>
                <AiOutlineClose />
            </CloseButton>
        </ContainerMessage>

    )
}

export default Message;
