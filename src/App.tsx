import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}
