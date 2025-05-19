import React from 'react';
import TodoItem from "../TodoItem/TodoItem.jsx";
import './TodoList.css'

function TodoList({todos,removeTodo,title,}) {
    return (
        <div className="TodoList">
            <h2>
                {title}
            </h2>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}   remove={removeTodo}/>
                )
            )}
        </div>
    );
}

export default TodoList;