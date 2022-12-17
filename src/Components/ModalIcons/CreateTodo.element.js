import styled from "styled-components";
import { Button, Modal } from 'antd';

export const ButtonCreate = styled(Button)`
    width: 110%;
    border: none;
    border-radius: 15px;
    height: 40px;
    margin-top: 18px;
    background: #4A7F8B;
    color: white;
    font-size: 20px;
    :hover {
        background: #4A7F8B !important;
        color: white !important;
    }
`

export const ModalGeneralTextH1 = styled.h1`
font-size: 30px;
text-align: center;
`
export const ModalContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const ModalLabelNameDescription = styled.label`
font-size: 30px;
text-align: lk;
`
export const ModalInputNameDescription = styled.input`
    height: 80px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
`
export const ModalLabelDescription = styled.label`
    font-size: 30px;
`
export const ModalTextarea = styled.textarea`
    height: 80px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
`
export const ButtonPost = styled(Button)`
    width: 82%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    background: #1677ff;
    color: white;
`

export const ModalInputTime = styled.input`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 30px;
    font-size: 20px;
`

