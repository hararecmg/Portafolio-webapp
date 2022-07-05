import axios from 'axios';


export type Giphy = 'gifs'|'stickers';
export const giphyApi = ( type: Giphy) => axios.create({
    baseURL: `https://api.giphy.com/v1/${type}`
});