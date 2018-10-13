import { Color } from 'app/config'
import { StyleSheet } from 'react-native'

export const buttonStyle = StyleSheet.create({
    buttonRegist: {
        backgroundColor: Color.green,
        width: 280,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    buttonLogin: {
        backgroundColor: 'white',
        width: 280,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textRegist: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    textLogin: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
    text: {
        fontSize: 14,
        color: 'white',
        marginVertical: 10,
        alignSelf: 'center'
    }
}) 

export const swiperStyle = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: '100%',
        alignSelf: 'center',
        top: '8%'
    },
    title: {
        marginHorizontal: 15,
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    desc: {
        marginHorizontal: 15,
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        width: '80%',
        alignSelf: 'center'
    }
})

export const registerStyle = StyleSheet.create({
    item: {
        backgroundColor: Color.grey02,
        margin: 10,
        width: 320,
        borderColor: 'transparent',
        borderRadius: 5,
    },
    icon: {
        color: Color.white,
        marginLeft: 10,
    }
})