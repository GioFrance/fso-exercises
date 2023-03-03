const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  return (
    <div>
      <h1>Greetings!!</h1>
      <Hello name="George" age={26 + 10} />
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
    </div>
  );
};

const x = 1;
let y = 5;

console.log(x, y); // 1, 5 are printed
y += 10;
console.log(x, y); // 1, 15 are printed
y = "sometext";
console.log(x, y); // 1, sometext are printed
// x = 4; // causes an error

const t = [1, -1, 3];

console.log("");

t.push(5);

console.log(t.length); // 4 is printed
console.log(t[1]); // -1 is printed

t.forEach((value) => {
  console.log(value); // numbers 1, -1, 3, 5 are printed, each to own line
});

console.log("");

const b = [1, -1, 3];

const t2 = b.concat(5); // creates new array

console.log(b); // [1, -1, 3] is printed
console.log(t2); // [1, -1, 3, 5] is printed

console.log("");

const a = [1, 2, 3];

const m1 = a.map((value) => value * 2);
console.log(m1); // [2, 4, 6] is printed

const m2 = a.map((value) => "<li>" + value + "</li>");
console.log(m2);
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

console.log("");

const c = [1, 2, 3, 4, 5];

const [first, second, ...rest] = c;

console.log(first, second); // 1, 2 is printed
console.log(rest); // [3, 4, 5] is printed

console.log("");

export default App;
