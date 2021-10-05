import React, { useState } from "react";

import { Form } from "./styles";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Message from "../../components/Message";
import { fontSize } from "../../styles/variables";

import Input from "../../components/Input";
import { FlexColumn } from "../../styles/styles";

const Exercise2 = () => {
    const [ msgVisible, setMsgVisible ] = useState('hidden');
    const [ msg, setMsg ] = useState('');
    const [ msgType, setMsgType ] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [name, setName] = useState('');
    const [returnIMC, setReturnIMC] = useState('');

    const calcIMC = (e) => {
        e.preventDefault();
        //Verificações se algum input está vázio;
        switch(''){
            case name:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Por favor digite seu nome');
            break;
            case height:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Por favor digite sua altura');
            break;
            case weight:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Por favor digite seu peso');
            break;
            default:
                setMsgVisible('hidden');
                //Calculo do IMC
                const imc = parseFloat(weight)/(parseFloat(height) * 2);
                if(imc <= 18.5) setReturnIMC(`${name} está abaixo do peso.`);
                else if(imc > 18.5 && imc <= 25) setReturnIMC(`${name} está com o peso normal.`);
                else if(imc > 25 && imc <= 30) setReturnIMC(`${name} está acima do peso.`);
                else setReturnIMC(`${name} está obeso`);
            break;
        }

    }

    return (
        <React.Fragment>
            <Header />
            <Main>
                <Label small={fontSize.medium} medium={fontSize.veryLarge} large={fontSize.veryLarge}>
                    Exercicio 2
                </Label>
                <Label fontWeight="400" textAlign="center"
                    marginLeft="10px" marginRight="10px" marginTop="10px"
                    small={fontSize.small} medium={fontSize.medium} large={fontSize.large}>
                    Digite as informações pedidas para calcular seu IMC (Índice de massa corporal)
                </Label>
                <FlexColumn align="center" marginTop="30px">
                    <Form>
                        <Input change={setName} placeholder="Digite seu nome" empty='false'/>
                        <Input type="number" marginTop="30px" change={setHeight} placeholder="Digite sua altura" empty='false'/>
                        <Input type="number" marginTop="30px" change={setWeight} placeholder="Digite seu peso" empty='false'/>
                        <Button marginTop="30px" click={calcIMC}>CALCULAR</Button>
                    </Form>
                    <Label>{returnIMC}</Label>
                </FlexColumn>
            </Main>
            <Message msgType={msgType} visible={{msgVisible, setMsgVisible}}>
                {msg}
            </Message>
        </React.Fragment>
    )
}

export default Exercise2;
