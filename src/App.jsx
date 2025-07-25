import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import RestListPage from "./pages/RestListPage";
import AddRestPage from "./pages/AddRestPage"
import RestDetailPage from './pages/RestDetailPage';
import './App.css'
import AddExpPage from './pages/AddExpPage';
import AboutPage from './pages/AboutPage';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurants/add" element={<AddRestPage />} />
         <Route path="/restaurants/about" element={<AboutPage />} />
        <Route path="/restaurants/" element={<RestListPage/>} />
        <Route path="/restaurants/:restaurantId" element={<RestDetailPage />} />
        <Route path="/restaurants/:restaurantId/add-experience" element={<AddExpPage />} />

      </Routes>
    </Router>              
  );
}                                   

export default App;








    