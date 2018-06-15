import axios from 'axios';

export function allTracks(){
    return {
        type: 'ALL_TRACKS',
        payload: axios({
            method: 'GET',
            url: 'https://99e9dfe3.ngrok.io/api/music'
        })
    }
}