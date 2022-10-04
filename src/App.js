import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemList from "./components/ItemList/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>

          <main>
            <Hero />
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

          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
