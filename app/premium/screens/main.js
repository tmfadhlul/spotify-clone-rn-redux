import React, { PureComponent, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import Header from '../components/Header';
import TrackList from '../components/TrackList';
import MiniPlayer from '../components/MiniPlayer';
import { Color } from '../../index';

export default class PremiumScreen extends PureComponent {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-analytics' style={{ color: tintColor }} />
        )
      }    

    render() {
        return (
            <View style={styles.view}>
                <Header />
                <TrackList style={styles.list} />
                <MiniPlayer />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: Color.black
    },
    list: {
        flex: 1
    }
});

