import React, { useState } from 'react'
import './App.css'
import { motion } from "framer-motion";

function App(){
  const size = 3;
  const [grid, setGrid] = useState(Array(size * size).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white") {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);
      setClickOrder([...clickOrder, index]);
    }

    if (index === size * size - 1) {
      changeToOrangeSequentially([...clickOrder, index]);
    }
  };

  const changeToOrangeSequentially = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          newGrid[idx] = "orange";
          return newGrid;
        });
      }, i * 500);
    });
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-40 mx-auto mt-10">
      {grid.map((color, index) => (
        <motion.div
          key={index}
          className="w-12 h-12 border cursor-pointer"
          style={{ backgroundColor: color }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default App
