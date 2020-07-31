import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { CurrentBirdBlock } from "./components/CurrentBirdBlock/CurrentBirdBlock";
import { FunctionalBlock } from "./components/FunctionalBlock/FunctionalBlock";

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <CurrentBirdBlock />
      <FunctionalBlock />
    </div>
  );
}
