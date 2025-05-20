import React, {useState} from 'react';
import cl from './TodoItem.module.css';
import MyButton from "../UI/button/MyButton.jsx";
import {FaPen} from "react-icons/fa";
import Modal from "../Modal/Modal.jsx";
import TodoEditForm from "../TodoEditForm/TodoEditForm.jsx";
import {SiTicktick} from "react-icons/si";
import {FiTrash} from "react-icons/fi";


function TodoItem(props) {
    const [modal, setModal] = useState(false);
    const [complete, setComplete] = useState(false);


    const rootClassName = [cl.TodoItem__checkbox]


    if (complete) {
        rootClassName.push(cl.active);
    }

    const handleClick = () => {
        setComplete(!complete);
    }

    return (
        <div className={cl.TodoItem}>
            <div className={cl.TodoItem__content}>

                <h3 id={props.todo.id}>{props.todo.title}</h3>
                <p>{props.todo.body}</p>
            </div>
            <div className={cl.TodoItem__Btn}>
                <Modal visible={modal} setVisible={setModal}>
                    <TodoEditForm todo={props.todo} setVisible={setModal}/>
                </Modal>
                <SiTicktick size={24} className={rootClassName.join(' ')} onClick={handleClick}/>
                <span className={cl.EditIcon} onClick={() => setModal(true)}><FaPen size={20}/></span>
                <FiTrash className={cl.TrashIcon} onClick={() => props.remove(props.todo)} size={25} />
            </div>
        </div>
    );
}

export default TodoItem;