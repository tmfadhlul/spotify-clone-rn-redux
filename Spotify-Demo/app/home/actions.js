import axios from 'axios';

export function allTracks(){
    return {
        type: 'ALL_TRACKS',
        payload: axios({
            method: 'GET',
            url: 'http://52.74.103.26/api/music'
        })
    }
}