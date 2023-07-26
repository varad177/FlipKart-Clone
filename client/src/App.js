
import { Box } from '@mui/material';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsView from './components/details/DetailsView';
import Card from './components/cart/Cart';
import Payment from './components/payment/Payment';

function App() {
  return (

    <DataProvider style={{ "padding": 0, "margin": 0 }}>
      <Router>
        <Box style={{ marginTop: 54, width: '100vw' }}>
          <Header />
        </Box>
        <Box style={{ marginTop: 54, width: '100vw' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailsView />} />
            <Route path='/cart' element={<Card />} />
            <Route path='/pay' element={<Payment />} />


          </Routes>
        </Box>
      </Router>
    </DataProvider>


  );
}

export default App;
