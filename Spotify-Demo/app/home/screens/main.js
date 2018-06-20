
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from "react-native";
import { Icon } from 'native-base';
import { NavigationActions } from 'react-navigation'
import axios from 'axios';
import { connect } from 'react-redux'


import { Color } from '../../index'
import MainComponent from '../components/mainComponent'
import homeReducers from '../reducers'

class HomeScreen extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={StyleSheet.absoluteFill}
                    source={require('../../src/source/gradientHome.png')}
                />
                <MainComponent />
            </View>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        contacts: state.homeReducers
    }
}

export default connect(mapStateToProps)(HomeScreen);


const styles = StyleSheet.create({
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