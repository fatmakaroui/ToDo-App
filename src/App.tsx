import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.scss';
import {Home,Login } from './Pages';
import { RootState } from './redux/store';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state: RootState) => state.login.isAuth)
  return (
    <div className=''>
    <BrowserRouter>
      <Routes>
        { !isAuth && 
          <Route path="/" element={<Login />} />
        }
        
        { isAuth && 
      <Route  path='/' element={<Home />}/>
      }
      </Routes>
    </BrowserRouter>
 
 </div>
  );
}

export default App;
