import axios from 'axios';

export function tabPlaylist(){
    return {
        type: 'TAB_PLAYLIST',
        payload: axios({
            method: 'GET',
            url: `http://7598c4d0.ngrok.io/api/music`
        })
    }
}

export function tabArtist(){
    return {
        type: 'TAB_ARTIST',
        payload: axios({
            method: 'GET',
            url: 'http://7598c4d0.ngrok.io/api/artist'
        })
    }
}

export function tabAlbums(){
    return {
        type: 'TAB_ALBUMS',
        payload: axios({
            method: 'GET',
            url: 'http://7598c4d0.ngrok.io/api/albums'
        })
    }
}

export function creatTabPlaylist(value){
    return {
        type: 'CREATE_TAB_PLAYLIST',
        payload: axios({
            method: 'POST',
            url: 'localhost:8000/api/music/',
            data: value
        })
    }
}