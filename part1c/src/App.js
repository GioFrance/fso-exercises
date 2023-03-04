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

const App = (props) => {
  const { counter } = props;
  return <div>{counter}</div>;
};

export default App;
