
import './App.css';
import Dashboaed from './components/Dashboard/Dashboaed';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Parent from './components/props/Parent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/props' element={<Parent />} />
          <Route path='/dashboard/:role' element={<Dashboaed />} />
        </Routes>
      </div>
      {/* <Parent /> */}
    </BrowserRouter>

  );
}

export default App;
