import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ButtonsCreateTodo from "../Buttons/ButtonsCreateTodo";

//components

import {
    SiderContent,
    SiderButtons,
    TextName,
    SiderMenu,
    SiderMenuLink,
    DescriptionMenu,
    SiderMenuContainer
} from './Sider.element'

function Sider({ isAuth, signUserOut, signInWithGoogle }) {
    return (

        <SiderContent>
            <TextName>TODO-MANAGER</TextName>
            <SiderMenu>
                <DescriptionMenu>OBJECTIVE</DescriptionMenu>
                <SiderMenuContainer>
                    <Link style={{ color: 'black' }} to='/menage'><SiderMenuLink>Menage</SiderMenuLink></Link>
                    <Link style={{ color: 'black' }} to='/accountant'><SiderMenuLink>Accountant</SiderMenuLink></Link>
                    <Link style={{ color: 'black' }} to='/consultant'><SiderMenuLink>Consultant</SiderMenuLink></Link>
                    <Link style={{ color: 'black' }} to='/director'><SiderMenuLink>Director</SiderMenuLink></Link>
                </SiderMenuContainer>
            </SiderMenu>
            <SiderButtons>
                <ButtonsCreateTodo isAuth={isAuth} signUserOut={signUserOut} signInWithGoogle={signInWithGoogle} />
            </SiderButtons>

        </SiderContent>

    )
}

export default Sider
