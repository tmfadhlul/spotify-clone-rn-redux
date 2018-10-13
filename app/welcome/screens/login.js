import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { View, Text, Button, Input, Item, Icon } from 'native-base';

import { Color } from 'app/index.js'
import { LoginFb, Login } from '../component/button';

const LoginScreen = (props) => {
    return (
        <View style={{ height: '100%', backgroundColor: Color.black, flex: 1 }} >
            <View style={{ alignSelf: 'center' }} >
                <LoginFb nav={props.navigation.navigate}/>
            </View>
            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '100', fontSize: 10, top: 20, marginVertical: 30 }} >or</Text>
            <View style={{ alignSelf: 'center', width: '80%', backgroundColor: 'transparent', top: 20 }} >
                <Item style={styles.item} >
                    <Icon style={styles.icon} name="ios-person-outline" />
                    <Input style={{ color: 'white' }} placeholderTextColor='rgba(255,255,255,0.8)' placeholder="Email or username" />
                </Item>
                <Item style={styles.item}>
                    <Icon style={styles.icon} name="ios-lock-outline" />
                    <Input style={{ color: 'white' }} placeholderTextColor='rgba(255,255,255,0.8)' placeholder="Password" />
                </Item>
            </View>
            <View style={{ alignSelf: 'center', marginTop: 50 }} >
                <Login nav={props.navigation.navigate}/>
            </View>
            <Text
                style={{ marginTop: 50, color: 'white', alignSelf: 'center', fontWeight: '100', fontSize: 12, }}
                onPress={() => Linking.openURL('https://www.spotify.com/id/password-reset/')}
            > Forgot your password?</Text>
        </View >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
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