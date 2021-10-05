import React from "react";

import { Btn } from "./styles";

const Button = props => {
    return (
        <Btn {...props} onClick={(e) => props.click ? props.click(e) && props.click : ''}>
            {props.children}
        </Btn>
    );
}

export default Button;
