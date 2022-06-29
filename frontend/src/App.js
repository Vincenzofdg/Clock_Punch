import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppProvider from './context/Provider'

// Pages:
import People from './pages/People';

function App() {  
  return (
    <AppProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={ <People /> } />
          {/* <Route path="/about" element={ <About /> } /> */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
