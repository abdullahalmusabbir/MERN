import React, {useState} from 'react';

export default function EventHookClasss2() {

    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount( count => count + 1);
        setCount( count => count + 1);
        setCount( count => count + 1);
    }

    const handleDecrement = () => {
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);
    }

    return(
        <div>
            <h1 className="text-center">Hook2</h1>
            <h1 className="text-center">Count: {count}</h1>
            <button onClick={handleIncreament} className="bg-green-500 text-white px-4 py-2 rounded ">increament</button>
            <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded ">decrement</button>
        </div>
    )
}