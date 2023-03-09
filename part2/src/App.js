import Note from "./components/Note";

const App = ({ noted }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {noted.map((x) => (
          // <li key={x.id}>{x.content}</li>
          <Note key={x.id} note={x} />
        ))}
      </ul>
    </div>
  );
};

export default App;
