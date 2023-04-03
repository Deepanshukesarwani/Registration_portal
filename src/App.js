import { Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './components/homepage/homepage';
import Form from './components/homepage/formpage/Form'
import React from 'react'
function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/Form' element={<Form/>}/>
      </Routes>
    </div>
  );
}
export default App;
