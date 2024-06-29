import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './webpages/Homepage';
import Lodging from './webpages/Lodging';
import Sightseeing from './webpages/Sightseeing';
import Transportation from './webpages/Transportation'
import Entertainment from './webpages/Entertainment'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Lodging' element={<Lodging /> } />
        <Route path='Sightseeing' element={< Sightseeing/>} />
        <Route path='Transportation' element={< Transportation/>} />
        <Route path='Entertainment' element={< Entertainment/>} />
      </Routes>
    </Router>
  );
}

export default App;
