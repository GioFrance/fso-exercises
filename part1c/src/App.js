// const Hello = ({ name, age }) => {
//   // OR
//   // const { name, age } = props;

//   // OR;
//   // const name = props.name;
//   // const age = props.age;

//   const bornYear = () => new Date().getFullYear() - age;

//   // OR
//   // const bornYear = () => {
//   //   return new Date().getFullYear() - age;
//   // };

//   // const bornYear = () => {
//   //   const yearNow = new Date().getFullYear();

//   //   return yearNow - props.age;
//   // };

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// export default App;

// -------------------------------------------

import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;
// OR
// const Display = ({ counter }) => {
//   return <div>{counter}</div>;
// };

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering...", counter);

  // const handleClick = () => {
  //   console.log("clicked");
  // };

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      {/* <button onClick={increaseByOne}> plus </button>
      OR
      <button onClick={handleClick}>
        plus
      </button>
      <button onClick={setToZero}>zero</button> */}
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={decreaseByOne} text="minus" />
      <Button handleClick={setToZero} text="zero" />
    </div>
  );
};

export default App;
