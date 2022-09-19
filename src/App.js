import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemList from "./components/ItemList/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <CartProvider>
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
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <footer></footer>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
