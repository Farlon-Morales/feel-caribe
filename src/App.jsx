import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import RestListPage from "./components/RestaurantList";
import AddRestPage from "./pages/AddRestPage"
import RestDetailPage from './pages/RestDetailPage';
import './App.css'
import AddExpPage from './pages/AddExpPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurants/add" element={<AddRestPage />} />
        <Route path="/restaurants" element={<RestListPage/>} />
        <Route path="/restaurants/:restaurantId" element={<RestDetailPage />} />
        <Route path="/restaurants/:restaurantId/add-experience" element={<AddExpPage />} />
      </Routes>
    </Router>              
  );ß
}                                   

export default App;








    