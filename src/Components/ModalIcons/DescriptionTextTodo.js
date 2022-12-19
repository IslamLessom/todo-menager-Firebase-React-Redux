import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal } from 'antd';

import {
    ButtonCreate,
    ModalGeneralTextH1,
} from './DesctiptionTextTodo.element'


const DesctiptionTextTodo = ({ desObjective }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                Подробнее
            </ButtonCreate>
            <Modal title={<ModalGeneralTextH1>Подробности к выполнению</ModalGeneralTextH1>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {desObjective}
            </Modal>
        </>
    );
};
export default DesctiptionTextTodo;