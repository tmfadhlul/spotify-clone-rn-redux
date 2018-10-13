import { StyleSheet } from "react-native";

import { Color } from 'app/config'

export const stylesScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.black
    },
    wrapperImg: {
        zIndex: -10,
        flex: 1,
        height: 720,
        position: 'absolute',
        top: 0
    },
})

export const stylesHomePlaylist = StyleSheet.create({
    container: {
        margin: 5,
        position: 'relative',
        height: 200,
        zIndex: 1,
        width: '80%',
        alignSelf: 'center'
    },
    title: {
        alignSelf: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    h2: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '100',
        color: 'white',
        marginTop: 10
    },
    content: {
        position: 'relative',
        top: -350,
        height: '112%',
        zIndex: 10,
    },
    contentTitle: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 4
    },
    contentImg: {
        alignSelf: 'center',
        height: 250,
        width: 250
    },
    contentDesc: {
        alignSelf: 'center',
        textAlign: 'center',
        width: 250,
        fontSize: 12,
        color: 'white',
        marginTop: 10,
        marginBottom: 50
    },
    wrapperImg: {
        position: 'relative',
        zIndex: 2,
    }
})