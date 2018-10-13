import { Icon } from 'native-base'
import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from "react-native"

import { HomePlaylist } from './components'
import { stylesScreen as styles } from './style'

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={StyleSheet.absoluteFill}
                source={require('app/src/source/gradientHome.png')}
            />
            <HomePlaylist />
        </View>
    )
}

export default HomeScreen
