import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import MyNavbar from "./components/MyNavbar";
import Articles from "./components/Articles";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar/>
        <Routes>
          <Route path="/home" element={<Articles />}/>
          <Route path="/article/:id" element={<Article />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
