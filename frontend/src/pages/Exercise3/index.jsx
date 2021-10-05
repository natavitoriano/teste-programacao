import React, { useState } from "react";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Input from "../../components/Input";
import Message from "../../components/Message";

import { fontSize } from "../../styles/variables";
import { FlexColumn, FlexRow } from "../../styles/styles";
import { BoxTotal, Form } from "./styles";
import Label from "../../components/Label";
import Button from "../../components/Button";

const Exercise3 = () => {
    const [ msgVisible, setMsgVisible ] = useState('hidden');
    const [ msg, setMsg ] = useState('');
    const [ msgType, setMsgType ] = useState('');
    const [strawberry, setStrawberry] = useState(0)
    const [apple, setApple] = useState(0);
    const [totStrawberry, setTotStrawberry] = useState(0);
    const [totApple, setTotApple] = useState(0);
    const [total, setTotal] = useState(0);

    //Função para calcular o total de cada fruta
    const calcTot = (kg, price, discountPrice) => {
        let totPrice = 0;
        let kgFruit = parseFloat(kg);

        //verifica se o kg da fruta é menor ou igual 5
        if(kgFruit <= 5){
            totPrice = kgFruit * price;
        }
        //verifica se o kg da fruta passou de 5 para usar preço reduzido
        else if(kgFruit > 5){
            totPrice = kgFruit * discountPrice;
        }
        //retorna o preço total da fruta com duas casas decimais
        return totPrice.toFixed(2);
    }

    const btnClickCalc = (e) => {
        let discount = 0;
        e.preventDefault();
        //verificações caso algum input esteja vazio
        switch(''){
            case strawberry:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Por favor digite quantos Kg de morango');
            break;
            case apple:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Por favor digite quantos Kg de maçã');
            break;
            default:
                setMsgVisible('hidden');
                let totKg = parseFloat(strawberry) + parseFloat(apple);
                let totStraw = parseFloat(calcTot(strawberry, 2.50, 2.20));
                let totApp = parseFloat(calcTot(apple, 1.80, 1.50));
                let totPrice = parseFloat(totStraw + totApp).toFixed(2);

                /*Verifica se o preço total é maior que 25 ou o peso é
                maior que 8kg para efetuar desconto de 10%
                */
                if(totPrice > 25 || totKg > 8){
                    discount = totPrice * 0.10;
                    totPrice = totPrice - discount;
                }

                setTotStrawberry(totStraw);
                setTotApple(totApp);
                setTotal(totPrice);
                break;
        }
    }

    return(
        <React.Fragment>
            <Header />
            <Main>
            <Label small={fontSize.medium} medium={fontSize.veryLarge} large={fontSize.veryLarge}>
                        Exercicio 3
                    </Label>
                    <Label textAlign="center" fontWeight="400" marginTop="10px"
                        marginLeft="10px" marginRight="10px"
                        small={fontSize.small} medium={fontSize.medium} large={fontSize.large}>
                        Escolha quantos Kg de morango deseja levar!
                        Acima de 5kg o morango sai por <strong>R$2,20 </strong>
                        e a maçã sai por <strong>R$1,50</strong>.
                        E tem mais.... se a compra ultrapassar 8kg, ou o total for
                        maior que <strong>R$25,00 </strong>
                        tem um desconto de <strong>10%</strong> no total!
                    </Label>
            <FlexColumn marginTop="20px">
                <FlexColumn align="center">
                    <Form>
                        <Input type="number" change={setStrawberry}
                            placeholder="Morango Kg" empty='false'/>
                        <Input type="number" marginTop="10px" change={setApple}
                            placeholder="Maçã Kg" empty='false'/>
                        <FlexRow justify="space-around" marginTop="10px">
                           <FlexColumn align="center">
                               <Label small={fontSize.verySmall} medium={fontSize.small} large={fontSize.small}>
                                   Preço morango
                                </Label>
                                <Input widthSmall="20vw" widthMedium="14vw" widthLarge="10vw"
                                    textAlign="center" value="2.50" readonly>
                                <Label textAlign="center" fontWeight="400"
                                    small={fontSize.small} medium={fontSize.medium} large={fontSize.medium}>
                                        R$
                                    </Label>
                                </Input>
                           </FlexColumn>
                           <FlexColumn>
                                <Label small={fontSize.verySmall} medium={fontSize.small} large={fontSize.small}>
                                   Preço maçã
                                </Label>
                                <Input textAlign="center" widthSmall="20vw" widthMedium="14vw" widthLarge="10vw"
                                     value="1.80" readonly>
                                    <Label textAlign="center" fontWeight="400" small={fontSize.small}
                                        medium={fontSize.medium} large={fontSize.medium}>
                                        R$
                                    </Label>
                                </Input>
                           </FlexColumn>
                        </FlexRow>
                        <Button marginTop="10px" click={btnClickCalc}>CALCULAR</Button>
                    </Form>
                </FlexColumn>
                <FlexColumn align="center">
                <BoxTotal>
                <Label textAlign="center"
                    small={fontSize.small} medium={fontSize.small} large={fontSize.small}>
                    Valores totais
                </Label>
                <FlexRow justify="space-between" marginTop="10px">
                        <FlexRow >
                        <FlexColumn align="center">
                            <Label fontWeight="500" textAlign="center"
                                small={fontSize.verySmall} medium={fontSize.small} large={fontSize.small}>
                                Morango
                            </Label>
                            <Input textAlign="center" widthSmall="20vw" widthMedium="14vw" widthLarge="10vw"
                                value={totStrawberry} readonly>
                                <Label textAlign="center" fontWeight="400" small={fontSize.verySmall}
                                    medium={fontSize.medium} large={fontSize.medium}>
                                    R$
                                </Label>
                            </Input>
                        </FlexColumn>
                        <FlexColumn align="center" marginLeft="20px">
                            <Label fontWeight="500" textAlign="center"
                                small={fontSize.verySmall} medium={fontSize.small} large={fontSize.small}>
                                Maçã
                            </Label>
                            <Input textAlign="center" widthSmall="20vw" widthMedium="14vw" widthLarge="10vw"
                                value={totApple} readonly>
                                <Label textAlign="center" fontWeight="400" small={fontSize.verySmall}
                                    medium={fontSize.medium} large={fontSize.medium}>
                                    R$
                                </Label>
                            </Input>
                        </FlexColumn>
                        </FlexRow>
                        <FlexColumn align="center">
                            <Label fontWeight="500" textAlign="center"
                                small={fontSize.verySmall} medium={fontSize.small} large={fontSize.small}>
                                Total
                            </Label>
                            <Input textAlign="center" widthSmall="20vw" widthMedium="14vw" widthLarge="10vw"
                                value={total} readonly>
                                <Label textAlign="center" fontWeight="400" small={fontSize.small}
                                    medium={fontSize.medium} large={fontSize.medium}>
                                    R$
                                </Label>
                            </Input>
                        </FlexColumn>
                    </FlexRow>
                </BoxTotal>
                </FlexColumn>
                </FlexColumn>
            </Main>
            <Message msgType={msgType} visible={{msgVisible, setMsgVisible}}>
                {msg}
            </Message>
        </React.Fragment>
    )
}

export default Exercise3;
