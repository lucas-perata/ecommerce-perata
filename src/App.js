import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemList from "./components/ItemList/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="Lucas" />} />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer saludo="Lucas" />}
            />
            <Route path="/cart" />
          </Routes>
        </main>

        <footer></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
