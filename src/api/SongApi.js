import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

export const fetchSongList = async () => {
    const response = await axios.get(`${API_URL}/Song/list`);
    return response.data;
};

export const fetchSongByName = async (filename) => {
    try {
        const response = await axios.get(`${API_URL}/Song/${filename}`, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error) {
        console.error('Error fetching song by name:', error);
        throw error; // Propagate the error for handling in the component
    }
};

export const searchSongsByName = async (searchString) => {
    const response = await axios.get(`${API_URL}/Song/search`, { params: { searchString } });
    return response.data;
};
//test again