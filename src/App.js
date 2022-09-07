import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <ItemListContainer saludo="Lucas" />
        <ItemDetailContainer />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
