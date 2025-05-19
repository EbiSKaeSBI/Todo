import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton.jsx";

function TodoEditForm({todo,setVisible}) {
    const [updateTodos, setUpdateTodos] = useState({title: todo.title, body: todo.body});

    const updateTodo = (e) => {
        e.preventDefault();
        todo.title = updateTodos.title;
        todo.body = updateTodos.body;
        setVisible(false);
    }


    return (
        <form className="TodoForm">
            <input
                placeholder='Изменить заголовок'
                value={updateTodos.title}
                onChange={e => setUpdateTodos({...todo, title: e.target.value})}/>
            <input
                placeholder='Изменить описание'
                value={updateTodos.body}
                onChange={e => setUpdateTodos({...todo, body: e.target.value})}/>
            <div>
                <MyButton onClick={updateTodo}>Подтвердить изменение</MyButton>
            </div>
        </form>
    );
}

export default TodoEditForm;