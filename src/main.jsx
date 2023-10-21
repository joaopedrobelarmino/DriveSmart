import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AUDI from './Components/Page/Cars/AUDI/AUDI.jsx';
import BMW from './Components/Page/Cars/BMW/BMW.jsx'
import Lamborghini from './Components/Page/Cars/Lamborghini/Lamborghini.jsx'
import Terms from './Components/Page/Terms/Terms.jsx';
import Document from './Components/Page/Document/Document.jsx';
import Address from './Components/Address/Address.jsx';
import Cars from './Components/Cars/Cars.jsx';
import Contact from './Components/Contact/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='Carros' element={<Cars />} />
        <Route path='Termos' element={<Terms />} />
        <Route path='Contato' element={<Contact />} />
        <Route path="AUDI" element={<AUDI />} />
        <Route path='BMW' element={<BMW />} />
        <Route path='Lamborghini' element={<Lamborghini />} />
        <Route path="Termos" element={<Terms />} />
        <Route path='Documento' element={<Document />} />
        <Route path='endereço' element={<Address />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
