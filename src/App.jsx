import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import RestListPage from "./pages/RestListPage";
import AddRestPage from "./pages/AddRestPage"
import RestDetailPage from './pages/RestDetailPage';
import './App.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurants/add" element={<AddRestPage />} />
        <Route path="/restaurants/experiences" element={<RestDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;








    