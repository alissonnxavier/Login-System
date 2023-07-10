import './tailwind.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Private from './pages/Private';
import Login from './pages/Login';
import BasicMenu from './pages/BasicMenu.tsx';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  return (
    <div className="">
      <div className='flex justify-center'>
        <header className="">
          Header
        </header>
      </div>
      <div className='flex justify-center p-3 m-4 '>
        <nav className='inline'>
          <Link to='/'>Home</Link><br />
          <Link to='/private'>Private Page</Link><br />
          <Link to='/login'>Login</Link>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<RequireAuth><Private /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<BasicMenu />} />
      </Routes>
    </div>
  );
}

export default App;
