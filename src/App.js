import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shops from './Component/Shops/Shops';
// import { BrowserRouter,Routes,Route   } from 'react-router-dom';
import Home from './Pages/Home'


function App() {
  return (
    <div className="App">
      <Header></Header>
    <Shops></Shops>
{/* <BrowserRouter>
<Routes>
  <Route path="/home" element={<Home/>}>

  </Route>
</Routes>
</BrowserRouter> */}
    </div>
  );
}

export default App;
