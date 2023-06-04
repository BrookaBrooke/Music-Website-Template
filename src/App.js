import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/Main';
import Navbar from './components/Navbar';
import 'tailwindcss/tailwind.css'
import Mixes from "./components/Mixes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="music/:" element={<Mixes />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
