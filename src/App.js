import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Components/Home/Portal';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Package from './Components/Pages/Package/Package';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Portal/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/Package' element={<Package/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
