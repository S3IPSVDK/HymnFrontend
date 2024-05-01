import React, { useState } from 'react';
import "./index.css";

// function App() {
//   return (
//         <h1 className="text-6xl text-TestBlue font-roboto">
//           Learn React
//         </h1>
//   );
// }

function App() {
  const [audio] = useState(new Audio());

  const [audioFiles] = useState(() => {
    // Importing all audio files from ./music/ directory
    const context = require.context('./music/', false, /\.(wav|mp3|flac)$/);
    const files = context.keys().map(key => ({
      name: key.split('/').pop(), // Extracting file name
      audio: new Audio(context(key)) // Creating audio object
    }));
    return files;
  });

  const play = (selectedAudio) => {
    // Pause any currently playing audio
    audioFiles.forEach(({ audio: file }) => {
      if (file !== selectedAudio) {
        file.pause();
        file.currentTime = 0;
      }
    });
    // Start playing the selected audio
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
    <div className="App">
      <header className="App-header">
        <p>
          HYMN
        </p>
        <p>
          Tunes for the soul
        </p>

        {audioFiles.map(({ name, audio }, index) => (
          <div key={index}>
            <p>{name}</p>
            <button onClick={() => play(audio)}>
              Play
            </button>
            <button onClick={() => pause(audio)}>
              Pause
            </button>
            <button onClick={() => stop(audio)}>
              Stop
            </button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
