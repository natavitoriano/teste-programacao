import React from "react";

import { ContainerMain } from './styles';

const Main = (props) => (
    <ContainerMain>
        {props.children}
    </ContainerMain>
);

export default Main;
