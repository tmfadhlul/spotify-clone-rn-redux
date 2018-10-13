import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { View, Text, Button, Input, Item, Icon } from 'native-base';

import { Color } from '../../index'
import { SignUpFb, SignUp } from '../component/button';
import { registerStyle as styles } from '../styles'

const RegisterScreen = (props) =>{
    return (
        <View style={{ height: '100%', backgroundColor: Color.black, flex: 1 }} >
            <View style={{ alignSelf: 'center' }} >
                <SignUpFb />
            </View>
            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '100', fontSize: 12, top: 20, marginVertical: 30 }} >or with e-mail</Text>
            <View style={{ alignSelf: 'center', width: '80%', backgroundColor: 'transparent', top: 20 }} >
                <Item style={styles.item} >
                    <Icon style={styles.icon} name="ios-mail-outline" />
                    <Input style={{ color: 'white' }} placeholderTextColor='rgba(255,255,255,0.8)' placeholder="Email" />
                </Item>
                <Item style={styles.item}>
                    <Icon style={styles.icon} name="ios-lock-outline" />
                    <Input style={{ color: 'white' }} placeholderTextColor='rgba(255,255,255,0.8)' placeholder="Choose password" />
                </Item>
                <Item style={styles.item} >
                    <Icon style={styles.icon} name="ios-person-outline" />
                    <Input style={{ color: 'white' }} placeholderTextColor='rgba(255,255,255,0.8)' placeholder="Choose username" />
                </Item>
                <Item style={styles.item}>
                    <Icon style={styles.icon} name="ios-calendar-outline" />
                    <Input style={{ color: 'white' }} placeholderTextColor='rgba(255,255,255,0.8)' placeholder="Date of birth" />
                </Item>
                <Item style={styles.item}>
                    <Icon style={styles.icon} name="ios-people-outline" />
                    <Input style={{ color: 'white' }} placeholderTextColor='rgba(255,255,255,0.8)' placeholder="Gender" />
                </Item>
            </View>
            <View style={{ alignSelf: 'center', marginTop: 50 }} >
                <SignUp />
            </View>
            <View style={{ width: 320, alignSelf: 'center', marginTop: 20 }} >
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: '100', fontSize: 12, }} >
                    By signing up, you agree to Spotify <Text> </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}
                            onPress={() => Linking.openURL('https://www.spotify.com/legal/end-user-agreement/')}>
                                Terms and condition of Use <Text> </Text>
                    </Text>
                        and <Text> </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}
                        onPress={() => Linking.openURL('https://www.spotify.com/legal/privacy-policy-update/')}>
                            Privacy Policy
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default RegisterScreen