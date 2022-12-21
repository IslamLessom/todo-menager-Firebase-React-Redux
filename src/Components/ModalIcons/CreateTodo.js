import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal } from 'antd';
//firebase
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { auth, db } from "../../Fairbase"
//firebase
import {
    ButtonCreate,
    ModalContainerDiv,
    ModalGeneralTextH1,
    ModalInputNameDescription,
    ModalLabelDescription,
    ModalLabelNameDescription,
    ModalTextarea,
    ButtonPost,
    ModalInputTime,
    ModalLabelCategories,
    ModalInputCategories,
    TreeSelectContainer,
    TreeSelects,
    TreeText,
    TextHours,
    ContainerDiv,
    ContainerDivText
} from './CreateTodo.element'

const treeData = [
    {
        value: 'Сотрудники',
        title: 'Сотрудники',
        children: [
            {
                value: 'Menage',
                title: 'Menage',
            },
            {
                value: 'Accountant',
                title: 'Accountant',
            },
            {
                value: 'Consultant',
                title: 'Consultant',
            },
            {
                value: 'Director',
                title: 'Director',
            },
        ],
    },
]


const CreateTodo = ({ isAuth }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameObjective, setNameObjective] = useState('')
    const [desObjective, setDesObjective] = useState('')
    const [timeObjectiveHours, setTimeObjectiveHours] = useState()
    const [timeObjectiveMinutes, setTimeObjectiveMinutes] = useState()
    const [timeObjectiveSeconds, setTimeObjectiveSeconds] = useState()
    const [value, setValue] = useState('');
    //TreeSelect
    const onChange = (newValue) => {
        setValue(newValue);
    };
    //TreeSelect
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
    //--Create
    const getTodo = async () => {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                nameObjective,
                desObjective,
                timeObjectiveHours,
                timeObjectiveSeconds,
                timeObjectiveMinutes,
                value
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    //--Create
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
                    <ContainerDivText>
                        <TextHours>Часов</TextHours>
                        <TextHours>Минут</TextHours>
                        <TextHours>Секунд</TextHours>
                    </ContainerDivText>
                    <ContainerDiv>
                        <ModalInputTime type="number" min="0" max="48" step="1" onChange={(event) => { setTimeObjectiveHours(event.target.value) }} />
                        <ModalInputTime type="number" min="0" max="60" step="1" onChange={(event) => { setTimeObjectiveMinutes(event.target.value) }} />
                        <ModalInputTime type="number" min="0" max="60" step="1" onChange={(event) => { setTimeObjectiveSeconds(event.target.value) }} />
                    </ContainerDiv>
                </ModalContainerDiv>
                <ModalContainerDiv>
                    <TreeSelectContainer>
                        <TreeText>Выберите сотрудника</TreeText>
                        <TreeSelects
                            showSearch
                            style={{
                                width: '100%',
                            }}
                            value={value}
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: 'auto',
                            }}
                            placeholder="Please select"
                            allowClear
                            treeDefaultExpandAll
                            onChange={onChange}
                            treeData={treeData} />
                    </TreeSelectContainer>
                </ModalContainerDiv>
                <ModalContainerDiv>
                    <ModalLabelDescription>Полное описание задачи</ModalLabelDescription>
                    <ModalTextarea onChange={(event) => { setDesObjective(event.target.value) }}></ModalTextarea>
                </ModalContainerDiv>
                <ModalContainerDiv>
                    <ButtonPost onClick={getTodo}>Создать задачу</ButtonPost>
                </ModalContainerDiv>

            </Modal>
        </>
    );
};
export default CreateTodo;