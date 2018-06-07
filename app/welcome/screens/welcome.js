import React, { Component } from 'react';
import { StyleSheet, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { Content, Button, View, Container } from 'native-base';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';

import { Slider, WelcomeHeader } from '../component/zIndex';
import { WelcomeBtn } from '../component/button';

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <WelcomeHeader />
                <Slider />
                <WelcomeBtn nav={this.props.navigation.navigate} />
                <ImageBackground source={require('../../src/raw/backgroud.jpg')} style={{ width: Width + 25, height: Height + 50, left: '-2%', zIndex: -10, position: 'absolute' }} />
            </View>
        )
    }
};
