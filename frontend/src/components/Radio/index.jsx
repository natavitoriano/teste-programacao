import React from "react";

import { CustonRadio } from './styles';

const Radio = (props) => (
    <CustonRadio {...props} type='radio' onChange={(e) => props.change && props.change(e)}/>
);

export default Radio;
