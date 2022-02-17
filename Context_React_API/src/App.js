import "./App.css";
import AddMovie from "./components/AddMovie";
import { MovieProvider } from "./components/MovieContext";
import MoviesList from "./components/MoviesList";
import Nav from "./components/Nav";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
