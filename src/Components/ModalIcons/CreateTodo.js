import React, { useState } from 'react';
import { Modal } from 'antd';

import {
    ButtonCreate,
    ModalContainerDiv,
    ModalGeneralTextH1,
    ModalInputNameDescription,
    ModalLabelDescription,
    ModalLabelNameDescription,
    ModalTextarea,
    ButtonPost,
    ModalInputTime
} from './CreateTodo.element'

const CreateTodo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameObjective, setNameObjective] = useState('')
    const [desObjective, setDesObjective] = useState('')
    const [timeObjective, setTimeObjective] = useState('')

    //--Modal
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    //--Modal

    return (
        <>
            <ButtonCreate type="primary" onClick={showModal}>
                Create objective
            </ButtonCreate>
            <Modal title={<ModalGeneralTextH1>Создать задачу</ModalGeneralTextH1>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ModalContainerDiv>
                    <ModalLabelNameDescription>Краткое название задачи:</ModalLabelNameDescription>
                    <ModalInputNameDescription onChange={(event) => { setNameObjective(event.target.value) }} />
                </ModalContainerDiv>
                <ModalContainerDiv>
                    <ModalLabelNameDescription>Время на выполнение:</ModalLabelNameDescription>
                    <ModalInputTime type="time" onChange={(event) => { setTimeObjective(event.target.value) }} />
                </ModalContainerDiv>
                <ModalContainerDiv>
                    <ModalLabelDescription>Полное описание задачи</ModalLabelDescription>
                    <ModalTextarea onChange={(event) => { setDesObjective(event.target.value) }}></ModalTextarea>
                </ModalContainerDiv>
                <ModalContainerDiv>
                    <ButtonPost>Создать задачу</ButtonPost>
                </ModalContainerDiv>

            </Modal>
        </>
    );
};
export default CreateTodo;