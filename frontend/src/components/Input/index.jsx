import React, { useState } from "react";

import { ContainerInput, CustomInput } from "./styles";


const Input = (props) => {
    const [isEmpty, setIsEmpty] = useState('');
    const [color, setColor] = useState('');

    const changeValue = (e) => {
        props.change(e.target.value)
        setIsEmpty(e.target.value)
    }

    const focusOut = () => {
        if(props.empty === 'false' && isEmpty === '') setColor('red');
        else setColor('var(--black)')
    }

    return (
        <ContainerInput color={color}{...props}>
            {props.children}
            <CustomInput readOnly={props.readonly} value={props.value} textAlign={props.textAlign} type={props.type} placeholder={props.placeholder} onChange={(e) => changeValue(e)}
            onBlur={() => focusOut()} />
        </ContainerInput>
    );
};

export default Input;
