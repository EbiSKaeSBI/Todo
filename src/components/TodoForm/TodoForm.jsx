import React, {useState} from 'react';
import './TodoForm.css'
import {IoCheckmarkOutline} from "react-icons/io5";


function TodoForm({create}) {

    const [todo, setTodo] = useState({title: "", body: ""})

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            ...todo, id: Date.now()
        }
        create(newTodo);
        setTodo({title: "", body: ""})
    }
    return (
        <form className="TodoForm">
            <label>
                Заголовок
                <input
                    placeholder='Введите заголовок'
                    value={todo.title}
                    onChange={e => setTodo({...todo, title: e.target.value})}
                    id="title"
                />
            </label>
            <label>
                Описание
                <input
                    placeholder='Введите описание'
                    value={todo.body}
                    onChange={e => setTodo({...todo, body: e.target.value})}/>
                <div className="TodoForm__btn">
                    <span className="TodoForm__acsBtn"><IoCheckmarkOutline   size={35} onClick={addTodo} /></span>
                </div>
            </label>
        </form>
    );
}

export default TodoForm;