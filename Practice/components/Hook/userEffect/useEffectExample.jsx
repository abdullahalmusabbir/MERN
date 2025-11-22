import React from 'react';
import { useEffect, useState } from 'react';

export default function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // calls with first render and depened on count
        console.log("useEffect");
    }, [count]);
    return (
        <div className="text-center m-4 p-4 border-2 border-black ">
            <h1 className="text-2xl font-bold mb-4">UseEffect Example</h1>
            {console.log("rednering")}
            <h1>Count: {count} </h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded "
                onClick={() => {
                setCount((count) => count + 1);
                }}
            >
                +
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded "
                onClick={() => {
                setIsLoading(!isLoading);
                }}
            >
                isLoading
            </button>
        </div>
    )
}