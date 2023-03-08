const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((x) => (
          // <li key={x.id}>{x.content}</li>
          <Note key={x.id} note={x} />
        ))}
      </ul>
    </div>
  );
};

export default App;
