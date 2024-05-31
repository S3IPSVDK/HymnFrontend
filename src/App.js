import React, { useState } from 'react';
import "./index.css";

function App() {
  const [audio] = useState(new Audio());

  const [audioFiles] = useState(() => {
    const context = require.context('./music/', false, /\.(wav|mp3|flac)$/);
    const files = context.keys().map(key => ({
      name: key.split('/').pop(),
      audio: new Audio(context(key))
    }));
    return files;
  });

  const play = (selectedAudio) => {
    audioFiles.forEach(({ audio: file }) => {
      if (file !== selectedAudio) {
        file.pause();
        file.currentTime = 0;
      }
    });
    selectedAudio.play();
  };

  const pause = (selectedAudio) => {
    selectedAudio.pause();
  };

  const stop = (selectedAudio) => {
    selectedAudio.pause();
    selectedAudio.currentTime = 0;
  };

  return (
    <div className="App min-h-screen flex flex-col items-center bg-darkPurple text-center p-6 text-lightLavender">
      <header className="App-header">
        <h1 className="text-6xl text-deepLavender font-roboto mb-4">
          <span className="inline-block animate-wave" style={{ animationDelay: '0s' }}>H</span>
          <span className="inline-block animate-wave" style={{ animationDelay: '0.1s' }}>Y</span>
          <span className="inline-block animate-wave" style={{ animationDelay: '0.2s' }}>M</span>
          <span className="inline-block animate-wave" style={{ animationDelay: '0.3s' }}>N</span>
        </h1>
        <p className="text-2xl text-lightLavender mb-8">Tunes for the soul</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audioFiles.map(({ name, audio }, index) => (
            <div key={index} className="p-4 bg-darkLavender rounded shadow-md">
              <p className="text-xl font-semibold mb-2 text-lightLavender">{name}</p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => play(audio)}
                  className="px-4 py-2 bg-deepLavender text-white rounded hover:bg-opacity-75"
                >
                  Play
                </button>
                <button 
                  onClick={() => pause(audio)}
                  className="px-4 py-2 bg-lightLavender text-white rounded hover:bg-opacity-75"
                >
                  Pause
                </button>
                <button 
                  onClick={() => stop(audio)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-opacity-75"
                >
                  Stop
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
