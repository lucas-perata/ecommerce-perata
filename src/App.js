import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
     <>
        <header>
            <NavBar/>
        </header>

        <main>
            <ItemListContainer
                saludo = 'Lucas'/>
            <div id="store" className="flex justify-center">
              <ItemCount
              stock = {2} />
            </div>
        </main>

        <footer>
          
        </footer>
     </>
  );
}

export default App;
