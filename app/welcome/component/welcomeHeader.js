import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WelcomeHeader  = (props) => {
    return (
        <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'center' }} >
            <Image source={require('../../src/drawable-xxxhdpi/ic_spotify_logo.png')} style={{ alignSelf: 'center', height: 80, width: 80, marginRight: 20 }} />
            {/* <Image source={require('../../src/drawable-mdpi/img_spotify_logo_text.png')} /> */}
            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 45, fontWeight: 'bold' }} >Spotify</Text>
        </View>
    )
}

export default WelcomeHeader