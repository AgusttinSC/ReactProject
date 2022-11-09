import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer';

const App = () => {

  const saludo = '¡Bienvenido a mi tienda!'

  return (
    
    <div>
      <NavBar />
      <ItemListContainer greeting = {saludo}>
        ¡Soka Sushi!
      </ItemListContainer>
      <ItemCount />
    </div>
  )
}

export default App;

