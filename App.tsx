import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from './combonents/mainPage/mainPage';
import ChatWindow from './combonents/chatWindow/chatWindow';
import Sidebar from './combonents/sideBar/sideBar';
import { useSelector } from 'react-redux';
import { RootState } from "./redux/reducers";

function App() {
  const { device } = useSelector((state: RootState) => state.windowSize);
  console.log(device);
  return (
    <div className="App">
         
            


    
      <BrowserRouter>
         
          <Routes>
          <Route path="/" element={<MainPage/>}/>
            
          
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
