// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchSongList, fetchSongByName } from './api/SongApi'; // Ensure this matches the file name
import SongPlayer from './components/SongPlayer';
import "./index.css";

function App() {
    const [audioFiles, setAudioFiles] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(null);

    useEffect(() => {
        const loadSongs = async () => {
            const songs = await fetchSongList();
            setAudioFiles(songs);
        };

        loadSongs();
    }, []);

    const play = async (filename) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const audioData = await fetchSongByName(filename);
        const audioBlob = new Blob([audioData], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const newAudio = new Audio(audioUrl);

        setCurrentAudio(newAudio);
        newAudio.play();
    };

    const pause = () => {
        if (currentAudio) {
            currentAudio.pause();
        }
    };

    const stop = () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
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
                    {audioFiles.map((name, index) => (
                        <SongPlayer
                            key={index}
                            name={name}
                            onPlay={() => play(name)}
                            onPause={pause}
                            onStop={stop}
                        />
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
