import './App.css'
import MyButton from "./components/UI/button/MyButton.jsx";
import React, {useState} from "react";
import {HiOutlinePlus} from "react-icons/hi";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import TodoForm from "./components/TodoForm/TodoForm.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, title: "Прогулка", body: "Прогулятся с собакой в 8"},
        {id: 2, title: "Убраться", body: "Убраться в комнате"},
    ]);
    const [modal, setModal] = useState(false);


    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        setModal(false);
    }
    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id));
    }


    return (
        <>
            <div className="navbar">
                <h1>Todo List</h1>
                <MyButton onClick={() => setModal(true)}><HiOutlinePlus size={14}/>Добавить задачу</MyButton>
            </div>
            <div>
                <Modal visible={modal} setVisible={setModal}>
                    <TodoForm create={createTodo}/>
                </Modal>
            </div>
            <div className="task_manage">
                {todos.length
                    ? <TodoList todos={todos} title="У вас не выполненые задачи"  removeTodo={removeTodo} />
                    : <h2>Задач нет...</h2>
                }

            </div>
        </>
    )
}

export default App
