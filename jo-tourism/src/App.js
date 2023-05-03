import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import MyContext from './MyContext';



function App() {
  const data = { details: 'petra' };
  return (
<>
<BrowserRouter>
<Header/>
<MyContext.Provider value={data}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
    </MyContext.Provider>
        <Footer/>
    </BrowserRouter>
      </>
  
  );
}

export default App;
