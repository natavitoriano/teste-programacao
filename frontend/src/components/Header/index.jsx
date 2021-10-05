import React, { useEffect } from "react";

import { Head, Menu } from "./styles";
import { FlexRow } from "../../styles/styles";
import { Link } from "react-router-dom";

const Header = () => {

    useEffect(() => {
        const link = window.location.href.split('/');
        if(link[link.length - 1] === "app"){
            const menuItem = document.getElementById('home');
            menuItem.classList.add('menu-active');
        }
        else if(link[link.length - 1] === "exercise1"){
            const menuItem = document.getElementById('exercise1');
            menuItem.classList.add('menu-active');
        }
        else if(link[link.length - 1] === "exercise2"){
            const menuItem = document.getElementById('exercise2');
            menuItem.classList.add('menu-active');
        }else{
            const menuItem = document.getElementById('exercise3');
            menuItem.classList.add('menu-active');
        }
    },[])

    return (
        <Head>
                <FlexRow width="100%" justify="center" align="center">
                    <nav>
                        <Menu>
                            <li>
                                <Link id="home" to='/app'>Home</Link>
                            </li>
                            <li>
                                <Link id="exercise1" to='/app/exercise1'>Exercício 1</Link>
                            </li>
                            <li>
                                <Link id="exercise2" to='/app/exercise2'>Exercício 2</Link>
                            </li>
                            <li>
                                <Link id="exercise3" to='/app/exercise3'>Exercício 3</Link>
                            </li>
                        </Menu>
                    </nav>
                </FlexRow>
            </Head>
    )
}

export default Header;
