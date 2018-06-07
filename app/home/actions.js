import axios from 'axios';

export function allTracks(){
    return {
        type: 'ALL_TRACKS',
        payload: axios({
            method: 'GET',
            url: 'http://localhost:8000/api/music/'
        })
    }
}