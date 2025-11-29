import Header from "./components/Header/Header";
import MainContent from "./components/MainPage/MainContent/MainContent";

// import bookJson from "./data/book.json";
// import type { Book } from "./data/types";

import book from "./data/book";
import type { Book as BookType } from "./data/types";

import "./App.css";

function App() {
  const typedBook: BookType = book;

  return (
    <main className="main_app">
      <Header />
      <MainContent book={typedBook} />
    </main>
  );
}

export default App;
