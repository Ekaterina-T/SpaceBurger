import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import {CloseIcon}  from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

const Modal = (props) => {

    //input for tab trap inside modal
    const [activeBeforeModal, setActiveBeforeModal] = useState(null);
    const [modalControls, setModalControls] = useState([]);

    const { children, onClose, type, modalComponent} = props;
    const modalRoot = document.querySelector("#modals");

    React.useEffect(() => {

        setActiveBeforeModal(document.activeElement);
        setModalControls([modalComponent.current, modalComponent.current.querySelector('button')]);

        modalComponent.current.focus();

    }, [modalComponent]);

    const addTabTrap = (e) => {
                
        if(e.code === "Tab") {            
            const activeElement = document.activeElement;
            
            if(e.shiftKey && activeElement === modalControls[0]) {
                e.preventDefault();
                modalControls[modalControls.length-1].focus();
            }

            if(activeElement === modalControls[modalControls.length-1]) {
                e.preventDefault();
                modalControls[0].focus();
            } 
        }
    }

    const handleKeyDown = (e) => {

        if(e.code === "Escape") {
            activeBeforeModal.focus();
            onClose(e);            
        }

        addTabTrap(e);
    }

    return ReactDOM.createPortal(
        (
            <>
                <article className={styles.modal} tabIndex={0} ref={modalComponent} onKeyDown={handleKeyDown}>
                    <button className={styles["close_btn_"+type]} onClick={onClose}><CloseIcon/></button>
                    {children}
                </article>
                <ModalOverlay onClose={onClose}/>
            </>
        ), 
        modalRoot
    );

} 

export default Modal

Modal.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.oneOf(["ingredient", "order"])
};

