import axios from 'axios';

export function tabPlaylist(){
    return {
        type: 'TAB_PLAYLIST',
        payload: axios({
            method: 'GET',
            url: `https://2f7e12a1.ngrok.io/api/music`
        })
    }
}

export function tabArtist(){
    return {
        type: 'TAB_ARTIST',
        payload: axios({
            method: 'GET',
            url: 'https://2f7e12a1.ngrok.io/api/artist'
        })
    }
}

export function tabAlbums(){
    return {
        type: 'TAB_ALBUMS',
        payload: axios({
            method: 'GET',
            url: 'https://2f7e12a1.ngrok.io/api/albums'
        })
    }
}

export function creatTabPlaylist(value){
    return {
        type: 'CREATE_TAB_PLAYLIST',
        payload: axios({
            method: 'POST',
            url: 'https://2f7e12a1.ngrok.io/api/music/',
            data: value
        })
    }
}