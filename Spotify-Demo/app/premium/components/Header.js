import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { CastButton } from 'react-native-track-player';

import { Color } from '../../index'

class Header extends PureComponent {

    render() {
        return (
            <View style={styles.bar}>
                <StatusBar
                    backgroundColor= {Color.grey01}
                    barStyle="light-content"
                />
                <Text style={styles.title}>Track</Text>
                <CastButton color="#ffffff" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Color.grey01,
        height: 56,
        elevation: 5,
        borderTopWidth: Platform.OS == 'ios' ? 20 : 0,
        borderTopColor: '#0288D1'
    },
    title: {
        flex: 1,
        fontSize: 17,
        color: '#ffffff',
        alignSelf: 'center',
        textAlign: 'center'
    }
});

export default Header;
