import React, { useEffect, useState } from "react";
import { BoxConvert } from "./styles";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Main from "../../components/Main";
import Radio from "../../components/Radio";
import Message from "../../components/Message";
import { FlexColumn, FlexRow } from "../../styles/styles";
import { fontSize } from "../../styles/variables";

const Exercise1 = () => {
    const [ msgVisible, setMsgVisible ] = useState('hidden');
    const [ msg, setMsg ] = useState('');
    const [ msgType, setMsgType ] = useState('');
    const [input, setInput] = useState('');
    const [checked, setChecked] = useState('Celsius para Fahrenheit');
    const [labelSelected, setLabelSelected] = useState('');
    const [tempConvert, setTempConvert] = useState('0');

    //Verificar qual radio está marcado para alterar label
    useEffect(() => {
        if(checked === 'Celsius para Fahrenheit')
            setLabelSelected('Digite a temperatura em Celsius')

        else setLabelSelected('Digite a temperatura em Fahrenheit')
    },[checked]);

    //Função chamada no clique do botão que converte a temperatura
    function convertTemp(e){
        e.preventDefault();
        //Se o input estiver vazio envia um erro ao usuário
        if(input === ""){
            setMsgType('error');
            setMsgVisible('visible');
            setMsg('Por favor digite a temperatura');
        }
        else{
            setMsgVisible('hidden');
            let temperature = parseFloat(input)
            let tempConverted = 0;
            if(checked === 'Celsius para Fahrenheit'){
                tempConverted = (temperature * 1.8) + 32;
                setTempConvert(`${tempConverted.toFixed(1)} ºF`)
            }
            else{
                tempConverted = 5 * (temperature - 32) /9;
                setTempConvert(`${tempConverted.toFixed(1)} ºC`)
            }
        }
    }

    function handleRadioChange(e){
        setChecked(e.target.value);
    }

    return (
        <React.Fragment>
            <Header />
            <Main>
                <FlexColumn>
                    <Label small={fontSize.medium} medium={fontSize.veryLarge} large={fontSize.title}>
                        Exercicio 1
                    </Label>
                    <Label fontWeight="400" marginLeft="10px" marginRight="10px" marginTop="10px"
                        small={fontSize.small} medium={fontSize.medium} large={fontSize.large}>
                        Escolha a conversão que deseja fazer
                    </Label>
                    <FlexRow align="center" marginLeft="10px" marginTop="10px">
                        <Radio type="radio" value="Celsius para Fahrenheit" name='group1'
                            change={handleRadioChange}
                            checked={checked === 'Celsius para Fahrenheit'}/>
                        <Label small={fontSize.verySmall} medium={fontSize.medium} large={fontSize.medium}
                            fontWeight='400' marginLeft="5px" marginRight="10px">
                            Celsius para Fahrenheit
                        </Label>
                        <Radio type="radio" value="Fahrenheit para Celsius" name='group1'
                            change={handleRadioChange}
                            checked={checked === 'Fahrenheit para Celsius'}/>
                        <Label small={fontSize.verySmall} medium={fontSize.medium} large={fontSize.medium}
                            fontWeight='400' marginLeft="5px" marginRight="10px">
                            Fahrenheit para Celsius
                        </Label>
                    </FlexRow>
                    <FlexRow justify="center" marginTop="50px">
                        <BoxConvert>
                            <Label small={fontSize.verySmall} medium={fontSize.medium} large={fontSize.large}>
                                {labelSelected}
                            </Label>
                            <Input width="10vw"textAlign="center" marginTop="10px" type="number" placeholder=""
                                change={setInput} empty='false' />
                            <Button width="20vw" marginTop="10px" click={convertTemp}>Converter</Button>
                            <Label fontWeight="500" marginTop="10px" color="green" small={fontSize.verySmall}
                                medium={fontSize.medium} large={fontSize.large}>
                                Temperatura convertida: <strong>{tempConvert}</strong>
                            </Label>
                        </BoxConvert>
                    </FlexRow>
                </FlexColumn>
            </Main>
            <Message msgType={msgType} visible={{msgVisible, setMsgVisible}}>
                {msg}
            </Message>
        </React.Fragment>
    )
}

export default Exercise1;
