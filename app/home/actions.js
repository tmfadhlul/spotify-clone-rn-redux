import axios from 'axios';

export function allTracks(){
    return {
        type: 'ALL_TRACKS',
        payload: axios({
            method: 'GET',
            url: 'https://9999abac.ngrok.io/api/music'
        })
    }
}