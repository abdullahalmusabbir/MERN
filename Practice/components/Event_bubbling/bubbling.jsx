import React from 'react';

export default function Bubbling() {

    const handleChildClick = (e) => {
            e.stopPropagation()
            alert("Child button clicked!");
            console.log('child', e.target);
        }

    const handleParentClick = (e) => {
        alert("Parent div clicked!");
        console.log('parent', e.target);
    }

    return (
        <div onClick={handleParentClick} className="bg-[#f5f5dc] text-black text-center self-center p-4">
            <h1 className="text-center">Event Bubbling Component</h1>
            <button onClick={handleChildClick} className="bg-blue-500 text-white px-4 py-2 rounded">+</button>
        </div>
    );
}