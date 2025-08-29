import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./store/index";
import PageCalculator from '/Users/faiqali/Documents/page_weight/src/screens/pageCalculator';



function App() {
  return (
    <Provider store={store}>
      <PageCalculator/>
    </Provider>
  );
} 

export default App;
