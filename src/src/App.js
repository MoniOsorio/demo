import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The recipe helper 🥦</h1>
      </header>
      <h2>Search for a recipe based on an ingredient!</h2>
      <br></br>
      <Search city="Oslo" />
    </div>
  );
}

export default App;
