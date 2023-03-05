import { useState } from "react";

const App = () => {
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });
  // OR
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1,
  //   };
  //   setClicks(newClicks);
  // };
  // OR
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };
  // OR
  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1,
  //   };
  //   setClicks(newClicks);
  // };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
    </div>
  );
};

export default App;
