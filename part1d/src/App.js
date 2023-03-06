import { useState } from "react";

const History = (props) => {
  if (props.allClicksHistory.length === 0) {
    return (
      <div>
        <p>the app is used by pressing the buttons</p>
      </div>
    );
  }

  return (
    <div>
      <p>button press history: {props.allClicksHistory.join(" ")}</p>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClicks}> {props.text}</button>;
};

const Total = (props) => {
  if (props.totalClicks === 0) {
    return (
      <div>
        <p>the total clicks will appear here once you clicked the button</p>
      </div>
    );
  }

  return (
    <div>
      <p>total: {props.totalClicks}</p>
    </div>
  );
};

const App = () => {
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });
  // OR
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

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
    console.log("left before", left);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log("left after", left);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
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
      <Button handleClicks={handleLeftClick} text="Left" />
      <Button handleClicks={handleRightClick} text="Right" />
      {right}
      <History allClicksHistory={allClicks} />
      <Total totalClicks={total} />
    </div>
  );
};

export default App;
