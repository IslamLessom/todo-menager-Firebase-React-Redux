import React, { useState } from "react";
import { ButtonRegister, NavbarRegister } from './ButtonsCreateTodo.element'

//firebase
import { auth } from "../../Fairbase";
import CreateTodo from "../ModalIcons/CreateTodo";
import Profile from "./Profile";


function ButtonsCreateTodo({ isAuth, signInWithGoogle, signUserOut }) {
    console.log(signInWithGoogle)
    return (
        <NavbarRegister>
            {!isAuth ? (
                <>
                    <ButtonRegister onClick={signInWithGoogle}>Login Profile</ButtonRegister>
                </>

            ) : (
                <>
                    {auth.lastNotifiedUid === 'qH0QyYnT8NO3dOwlWiZPMnEEif32' && (
                        <CreateTodo />
                    )}
                    <ButtonRegister onClick={signUserOut}>Exit Profile</ButtonRegister>
                    <Profile />
                </>
            )}
        </NavbarRegister>

    )
}

export default ButtonsCreateTodo
