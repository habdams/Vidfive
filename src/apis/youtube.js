import axios from 'axios';

const KEY = 'AIzaSyA1xxfIYgvtbuJkt07Jy80REaaYziOEH-0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});