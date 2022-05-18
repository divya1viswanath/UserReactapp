import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Adduser from './component/Adduser';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Search from './component/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Adduser/>}/>
          <Route path='/search'exact element={<Search/>}/>
        </Routes>                                                                                   
      </BrowserRouter>
    </>
  );
}

export default App;
