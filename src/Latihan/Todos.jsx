import { memo } from 'react';

// eslint-disable-next-line react/prop-types
const Todos = ({ todos, startEdit, deleteTodo }) => {
    console.log('child render');
    return (
        <div>
            {todos.map((todo, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '10px',
                        justifyContent: 'space-between',
                    }}
                >
                    <p style={{ flex: 1 }}>{todo}</p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button onClick={() => startEdit(index)}>Edit</button>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default memo(Todos);
