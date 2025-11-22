import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="bg-pink-400 p-4 m-4">
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel ipsam
          error ex? Doloribus voluptatibus, esse et culpa ullam cum consequuntur
          aperiam alias sapiente! Itaque similique delectus fugit labore
          doloribus?
        </p>
      )}
      <div className="text-center border-t-2 pt-4 mt-4 ">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Toggle;