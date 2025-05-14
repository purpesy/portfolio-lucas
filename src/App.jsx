import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <footer className="text-white text-center p-4 mt-auto">
        <p>&copy; 2025 Lucas | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
