import { Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { Color } from 'app/index.js'
import { buttonStyle as styles } from '../styles'

export const WelcomeBtn = (props) => {
    return (
        <View style={{ flex: 1, top: '15%' }} >
            <Button rounded onPress={() => props.navigation.navigate('Register')} style={styles.buttonRegist}>
                <Text style={styles.textRegist}>CREATE ACCOUNT</Text>
            </Button>
            <Text style={styles.text}>Already a user ?</Text>
            <Button rounded onPress={() => props.navigation.navigate('Login') } style={styles.buttonLogin}>
                <Text style={styles.textLogin}>LOG IN</Text>
            </Button>
        </View >
    )
}

export const SignUpFb = (props) => {
    return (
        <Button rounded onPress={() => props.navigation.navigate('RegisterScreen')} style={{ width: 320, top: 20, justifyContent: 'center' }} >
            <Text style={{ color: 'white' }} >SIGN UP WITH FACEBOOK</Text>
        </Button>
    )
}

export const SignUp = (props) => {
    return (
        <Button rounded onPress={() => props.navigation.navigate('MainScreen')} style={{ backgroundColor: Color.green, width: 250, justifyContent: 'center' }}  >
            <Text style={{ color: 'white' }} >SIGN UP</Text>
        </Button>
    )
}

export const LoginFb = () => {
    return (
        <Button
            style={{ width: 320, top: 20, justifyContent: 'center' }}
            rounded onPress={() => Linking.openURL('https://web.facebook.com/login.php?skip_api_login=1&api_key=174829003346&signed_next=1&next=https%3A%2F%2Fweb.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Fapi%252Ffacebook%252Foauth%252Faccess_token%26state%3DAQDfT2M-qSfHr0iYvNRpa2WYqkf8-SAscDqBs3WQQvUT3-PvAJpiFSxfb76yEt7zASJitallRnAiiOPnjyxp7Sn6m59k4eTL9HBdgUDZEqLf1CTBzqsEOZ-R_ThsbWsZwe290qc%26client_id%3D174829003346%26ret%3Dlogin%26logger_id%3D959eb881-5ca0-e169-4797-5ce19a60da3d&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Fapi%2Ffacebook%2Foauth%2Faccess_token%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQDfT2M-qSfHr0iYvNRpa2WYqkf8-SAscDqBs3WQQvUT3-PvAJpiFSxfb76yEt7zASJitallRnAiiOPnjyxp7Sn6m59k4eTL9HBdgUDZEqLf1CTBzqsEOZ-R_ThsbWsZwe290qc%23_%3D_&display=page&locale=id_ID&logger_id=959eb881-5ca0-e169-4797-5ce19a60da3d')}>
            <Text style={{ color: 'white' }} >LOG IN WITH FACEBOOK</Text>
        </Button>
    )
}

export const Login = (props) => {
    return (
        <Button
            style={{ backgroundColor: Color.green, width: 250, justifyContent: 'center' }}
            rounded onPress={() => props.nav('Apps')} >
            <Text style={{ color: 'white' }} >LOG IN</Text>
        </Button>
    )
}
