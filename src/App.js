import React from 'react';
import VideoBackground from './components/Elements/VideoBackground';
import DataView from './components/HomePage/DataView';
import Header from './components/Elements/Header';
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
