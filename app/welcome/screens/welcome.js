import { View } from 'native-base'
import Video from 'react-native-video'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Slider, WelcomeHeader } from '../component'
import { WelcomeBtn } from '../component/button'
import LightVideo from "../../src/raw/roomies.mp4"


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
}
