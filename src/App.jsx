import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import RestListPage from "./pages/RestListPage";
import AddRestPage from "./pages/AddRestPage"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurants/add" element={<AddRestPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;








    