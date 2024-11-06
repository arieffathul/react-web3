// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Todos from './Todos';
import { useNavigate } from 'react-router-dom';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const navigate = useNavigate();

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            if (isEditing) {
                const updatedTodos = todos.map((todo, index) =>
                    index === editIndex ? newTodo : todo
                );
                setTodos(updatedTodos);
                setIsEditing(false);
                setEditIndex(null);
            } else {
                setTodos((prevTodos) => [...prevTodos, newTodo]);
            }
            setNewTodo('');
        }
    };

    const startEdit = (index) => {
        setNewTodo(todos[index]);
        setIsEditing(true);
        setEditIndex(index);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>To Do List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button onClick={addTodo} style={{marginLeft: '20px', marginBottom: '20px'}}>
                {isEditing ? 'Update Todo' : 'Add Todo'}
            </button>

            <Todos
                todos={todos}
                startEdit={startEdit}
                deleteTodo={deleteTodo}
            />
            <button onClick={() => navigate('/cart')}>Next</button>
        </div>
    );
}
