import React, {useState} from 'react';
import cl from './TodoItem.module.css';
import MyButton from "../UI/button/MyButton.jsx";
import {FaPen} from "react-icons/fa";
import Modal from "../Modal/Modal.jsx";
import TodoEditForm from "../TodoEditForm/TodoEditForm.jsx";
import {SiTicktick} from "react-icons/si";


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
                <SiTicktick size={24} className={rootClassName.join(' ')} onClick={handleClick}/>
                <h3 id={props.todo.id}>{props.todo.title}</h3>
                <p>{props.todo.body}</p>
            </div>
            <div className={cl.TodoItem__Btn}>
                <Modal visible={modal} setVisible={setModal}>
                    <TodoEditForm todo={props.todo} setVisible={setModal}/>
                </Modal>
                <span className={cl.EditIcon} onClick={() => setModal(true)}><FaPen/></span>
                <MyButton onClick={() => props.remove(props.todo)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default TodoItem;