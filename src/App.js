import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer';

const App = () => {

  const saludo = '¡Bienvenido a mi tienda!'

  return (
    
    <div>
      <NavBar />
      <ItemListContainer greeting = {saludo}>
        ¡Bienvenido a mi tienda!
      </ItemListContainer>
    </div>
  )
}

export default App;

