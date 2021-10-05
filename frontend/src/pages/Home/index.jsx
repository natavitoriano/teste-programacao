import React from "react";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Label from "../../components/Label";

import { fontSize } from "../../styles/variables";
import { useSelector } from "react-redux";

const Home = (props) => {
    const name = useSelector(state => state.reducerUser.name);

    return (
        <React.Fragment>
            <Header/>
            <Main>
                <Label small={fontSize.medium} medium={fontSize.veryLarge} large={fontSize.extraVeryLarge}>
                    Bem-Vindo
                </Label>
                <Label small={fontSize.medium} fontWeight='400'
                    marginTop="5px" marginLeft="20px"
                    medium={fontSize.veryLarge} large={fontSize.extraVeryLarge}>
                    {name}
                </Label>
            </Main>
        </React.Fragment>
    )
}

export default Home;
