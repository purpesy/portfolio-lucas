import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <footer className="text-white text-center p-4 mt-auto">
        <p>&copy; 2025 Lucas | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
