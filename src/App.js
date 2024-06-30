import React from 'react';
import VideoBackground from './components/VideoBackground';
import DataView from './components/DataView';
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <div className="App">
      <VideoBackground />
      <Header />
      <DataView />
    </div>
  );
}

export default App;
