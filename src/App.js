import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (e) {
      setError(true);
      console.error(e.message);
    }
  };

  return (
    <>
      <section className="containerBox">
        <h3>Color generator</h3>
        <form action="#" onSubmit={handleSubmit}>
          <input
            placeholder="#f3f3f3.."
            type="text"
            value={color}
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="button" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              hexColor={color.hex}
              index={index}
              key={index}
              {...color}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
