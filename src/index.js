import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Information from "./Information";

const render = ReactDOM.render(<BrowserRouter> <Routes>
    <Route path="/" element={<App/>} />
    <Route path="map" element={<Information/>} />
      </Routes> </BrowserRouter>, document.getElementById('root'));