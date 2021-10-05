import React, { useState } from "react";
import api from "../../service/api";

import InputIcon from "../../components/Input/index";
import Button from "../../components/Button/index";
import CircleIcon from "../../components/CircleIcon";
import Message from "../../components/Message";

import { Container, BoxCenter, BoxLogin } from "../Login/styles";
import { FlexColumn } from "../../styles/styles.js";

import { VscAccount } from "react-icons/vsc"
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";

import { ACTION_MESSAGE } from "../../store/actions/actionMessage";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const Register = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [ msgVisible, setMsgVisible ] = useState('hidden');
    const [ name, setName ] = useState('');
    const [ msg, setMsg ] = useState('');
    const [ msgType, setMsgType ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] =useState('');

    const register = async () => {
        try{
            const payload = {
                name: name,
                email: email,
                password: pass
             };
            //Envia os dados para cadastro ao backend
            await api.post("/auth/register", payload);
            setMsgVisible('hidden');
            //Mensagem de feedback ao usuário de cadastro concluido
            dispatch({type: ACTION_MESSAGE,
                payload: {
                    msgType: 'success',
                    msgVisibility: 'visible',
                    msg: 'Cadastro concluído com sucesso'
                }
            });
            //Volta para o login
            history.push("/");
        }catch(err){
            //Verifica se o backend retornou que o  usuário já existe
            if(err.response.data.error === "User already exists"){
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('E-mail informado já existe');
            }
        }
    }

    const fieldsValidate = (e) => {
        e.preventDefault();
        //Verifica se há algum input vazio e envia feedback ao usuário
        switch(''){
            case name:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Preencha o campo nome');
            break;
            case email:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Preencha o campo e-mail');
            break;
            case pass:
                setMsgType('error');
                setMsgVisible('visible');
                setMsg('Preencha o campo senha');
            break;
            default:
                setMsgVisible('hidden');
                register();
            break;
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
                    <InputIcon type="text" placeholder="Nome"
                        change={setName} empty="false">
                        <AiOutlineUser />
                    </InputIcon>
                    <InputIcon type="email" marginTop="20px" placeholder="E-mail"
                        change={setEmail} empty="false">
                        <AiOutlineMail />
                    </InputIcon>
                    <InputIcon type="password" marginTop="20px" marginBottom="0px" placeholder="Senha"
                        change={setPass} empty="false" >
                        <CgPassword />
                    </InputIcon>
                    <Button marginTop="40px" click={fieldsValidate}>CADASTRAR</Button>
                </BoxLogin>
            </FlexColumn>
            <Message id="message" msgType={msgType} visible={{msgVisible, setMsgVisible}}>
                {msg}
            </Message>
        </BoxCenter>
    </Container>
)
}

export default Register;



