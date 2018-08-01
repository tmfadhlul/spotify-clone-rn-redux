import axios from 'axios';

export function tabPlaylist(){
    return {
        type: 'TAB_PLAYLIST',
        payload: axios({
            method: 'GET',
            url: `http://52.74.103.26/api/music`
        })
    }
}

export function tabArtist(){
    return {
        type: 'TAB_ARTIST',
        payload: axios({
            method: 'GET',
            url: 'http://52.74.103.26/api/artist'
        })
    }
}

export function tabAlbums(){
    return {
        type: 'TAB_ALBUMS',
        payload: axios({
            method: 'GET',
            url: 'http://52.74.103.26/api/albums'
        })
    }
}

export function creatTabPlaylist(value){
    return {
        type: 'CREATE_TAB_PLAYLIST',
        payload: axios({
            method: 'POST',
            url: 'http://52.74.103.26/api/music/',
            data: value
        })
    }
}