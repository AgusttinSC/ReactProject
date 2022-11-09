import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer';

const App = () => {

  const saludo = '¡Bienvenido a mi tienda!';
  const stock = 20

  return (
    
    <div>
      <NavBar />
      <ItemListContainer greeting = {saludo}>
        ¡Soka Sushi!
      </ItemListContainer>
      <ItemCount stock= {stock} />
    </div>
  )
}

export default App;

