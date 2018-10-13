import axios from 'axios';

import { API_URL } from 'app/config'

export function allTracks(){
    return {
        type: 'ALL_TRACKS',
        payload: axios({
            method: 'GET',
            url: `${API_URL}/api/music`
        })
    }
}