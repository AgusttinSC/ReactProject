import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer'
import Item from '../components/Item';
import Layout from './Layout'



const Router = () => (

    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<p>BUENAS</p>} />
                <Route path='/itemlistcontainer' element={<ItemListContainer />} />
                <Route path='/itemdetailcontainer' element={<ItemDetailContainer />} />
                <Route path="/page2/:nombre" element={<Item />} />
            </Route>
        </Routes>
    </BrowserRouter>
) 

export default Router;