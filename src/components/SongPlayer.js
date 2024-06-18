import React from 'react';

const SongPlayer = ({ name, onPlay, onPause, onStop }) => {
    return (
        <div className="p-4 bg-darkLavender rounded shadow-md">
            <p className="text-xl font-semibold mb-2 text-lightLavender">{name}</p>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={onPlay}
                    className="px-4 py-2 bg-deepLavender text-white rounded hover:bg-opacity-75"
                >
                    Play
                </button>
                <button
                    onClick={onPause}
                    className="px-4 py-2 bg-lightLavender text-white rounded hover:bg-opacity-75"
                >
                    Pause
                </button>
                <button
                    onClick={onStop}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-opacity-75"
                >
                    Stop
                </button>
            </div>
        </div>
    );
};

export default SongPlayer;
