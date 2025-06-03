
import './App.css';
import Navbar from './components/Navbar';
import Parent from './components/props/Parent';
function App() {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>Welcome to React App</div>
      <Parent />
    </>
  );
}

export default App;
