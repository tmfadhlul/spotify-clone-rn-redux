import React, { Component } from 'react';
import { StyleSheet, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { Content, Button, View, Container } from 'native-base';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';

import { Slider, WelcomeHeader } from '../component/zIndex';
import { WelcomeBtn } from '../component/button';
import LightVideo from "../../src/raw/roomies.mp4";

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <Video repeat source={LightVideo} resizeMode="cover" style={StyleSheet.absoluteFill} />
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <WelcomeHeader />
                    <Slider />
                    <WelcomeBtn {...this.props} />
                </View>
            </View>
        )
    }
};
