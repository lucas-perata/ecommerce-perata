import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";

function App() {
  return (
    <div className="flex flex-col justify-start" style={{ minHeight: "100vh" }}>
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
              <Route path="/about-us" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
