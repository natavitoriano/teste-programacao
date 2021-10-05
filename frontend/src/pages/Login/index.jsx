import React, { useEffect, useState } from "react";
import api from "../../service/api";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";

import { TOKEN_AUTH } from "../../store/actions/actionToken";
import { USER_AUTHENTICATE } from "../../store/actions/actionUser";
import { ACTION_MESSAGE } from "../../store/actions/actionMessage";

import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import CircleIcon from "../../components/CircleIcon";
import Message from "../../components/Message";


import { Container, BoxCenter, BoxLogin } from "./styles";
import { FlexColumn, CustomLink } from "../../styles/styles";

import { VscAccount } from "react-icons/vsc"
import { AiOutlineMail } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";

const Login = () => {
    let history = useHistory();
    const isMsg = useSelector(state => state.reducerMessage);
    const dispatch = useDispatch();
    const [ msgVisible, setMsgVisible ] = useState('hidden');
    const [ msg, setMsg ] = useState('');
    const [ msgType, setMsgType ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] =useState('');

    useEffect(() => {
        //Verifica se possui mensagem de feedback ao usuário para ser mostrada
        if(isMsg.msgVisibility !== 'hidden'){
                setMsgType(isMsg.msgType);
                setMsgVisible(isMsg.msgVisibility);
                setMsg(isMsg.msg);

                dispatch({type: ACTION_MESSAGE,
                payload: {
                    msgType: '',
                    msgVisibility: 'hidden',
                    msg: ''
                }
            });
        }
    },[isMsg,dispatch]);


    async function clickOpenButton(){
        const user = { email: email, password: pass }
        try{
            //Autentica o usuário enviando informações ao backend
            const resp = await api.post('/auth/authenticate', user)
            dispatch({ type: TOKEN_AUTH, payload: `Bearer ${resp.data.token}`})
            dispatch({ type: USER_AUTHENTICATE,
                payload: {
                    name: resp.data.user.name
                }
            })
            //chama a próxima página
            history.push("/app");
        }catch(err){
            //Verifica se o e-mail é inválido
            if(err.response.data.error === 'User not found'){
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('E-mail não cadastrado');
            }
            //Verifica se a senha é inválida
            else if(err.response.data.error === 'Invalid password'){
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Senha inválida');
            }
        }
    }

    const fieldsValidate = (e) => {
        e.preventDefault();
        //Verifica se há algum input vazio
        if(email === ''){
            setMsgType('error');
            setMsgVisible('visible');
            setMsg('Preencha o campo e-mail');
        }
        else if(pass === ''){
            setMsgType('error');
            setMsgVisible('visible');
            setMsg('Preencha o campo senha');
        }
        else{
            clickOpenButton(e);
        }
    }

return (
    <Container>
        <BoxCenter>
            <FlexColumn align="center">
            <CircleIcon>
                <VscAccount />
            </CircleIcon>
                <BoxLogin>
                    <Input type="email" placeholder="E-mail"
                        change={setEmail} empty="false">
                        <AiOutlineMail />
                    </Input>
                    <Input type="password" marginTop="20px" marginBottom="50px" placeholder="Senha"
                        change={setPass} empty="false">
                        <CgPassword />
                    </Input>
                    <CustomLink to="/app" >
                        <Button click={fieldsValidate}>ENTRAR</Button>
                    </CustomLink>
                    <CustomLink to="/register">
                        <Button marginTop='10px' to="/register">CADATRE-SE</Button>
                    </CustomLink>
                </BoxLogin>
            </FlexColumn>
        </BoxCenter>
        <Message msgType={msgType} visible={{msgVisible, setMsgVisible}}>
            {msg}
        </Message>
    </Container>
)
}

export default Login;
