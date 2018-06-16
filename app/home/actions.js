import axios from 'axios';

export function allTracks(){
    return {
        type: 'ALL_TRACKS',
        payload: axios({
            method: 'GET',
            url: 'https://2f7e12a1.ngrok.io/api/music'
        })
    }
}