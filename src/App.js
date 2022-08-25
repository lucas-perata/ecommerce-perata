import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
     <>
        <header>
            <NavBar/>
        </header>

        <main>
            <ItemListContainer
                saludo = 'Lucas'/>
        </main>

        <footer>
          
        </footer>
     </>
  );
}

export default App;
