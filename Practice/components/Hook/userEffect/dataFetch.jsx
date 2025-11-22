import React, { useState, useEffect } from 'react';

const loadingMessage = <p>todos is loading</p>;

export default function DataFetch() {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            if (!res.ok) {
            throw Error("fecthing is not successful");
            } else {
            return res.json();
            }
        })
        .then((data) => {
            setTodos(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });
    }, []);

    const todosElement =
        todos &&
        todos.map((todo) => {
        return <p key={todo.id}> {todo.title} </p>;
        });

    return (
        <div className="h-64 overflow-y-auto p-4 border-2 border-black m-4">
            <h1>Todos</h1>
            {error && <p> {error} </p>}
            {isLoading && loadingMessage}
            {todosElement}
        </div>
    );
}