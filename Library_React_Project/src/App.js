import "./App.css";
import { BooKProvider } from "./components/BookContext";
import BookList from "./components/BookList";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Food from "./components/Food";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <BooKProvider>
        <Nav />
        <Form />
        <BookList />
        {/* <Food value={12}/> */}
        <Counter/>

      </BooKProvider>
    </div>
  );
}

export default App;
