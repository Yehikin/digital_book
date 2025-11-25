import Header from "./components/Header/Header";
import MainContent from "./components/MainPage/MainContent/MainContent";

import bookJson from "./data/book.json";
import type { Book } from "./data/types";

import "./App.css";

function App() {
  const book: Book = bookJson;

  return (
    <main className="main_app">
      <Header />
      <MainContent book={book} />
    </main>
  );
}

export default App;
