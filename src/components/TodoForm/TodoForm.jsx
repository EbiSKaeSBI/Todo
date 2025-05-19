import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton.jsx";
import './TodoForm.css'

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
            <input
                placeholder='Введите заголовок'
                value={todo.title}
                onChange={e => setTodo({...todo, title: e.target.value})}/>
            <input
                placeholder='Введите описание'
                value={todo.body}
                onChange={e => setTodo({...todo, body: e.target.value})}/>
            <div>
                <MyButton onClick={addTodo}>Добавить задачу</MyButton>
            </div>
        </form>
    );
}

export default TodoForm;