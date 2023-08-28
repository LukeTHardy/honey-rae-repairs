import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("you got clicked");
  };

  return (
    <div>
      <h2>let's try some stuff</h2>
      <h3>let's try some more stuff</h3>
      <h4>how far can we go?</h4>
      <h5>apparently farther</h5>
      <h6>all the way down we go</h6>
      <h6>into oblivion</h6>
      <h6>until this is a website for ants</h6>
      <h6>who can't read good</h6>
      <button className="btn-secondary" onClick={handleClick}>
        click me bish i dare you
      </button>
      <div>Count:{count}</div>
    </div>
  );
};
