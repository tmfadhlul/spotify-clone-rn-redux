import React, { Component, PropTypes } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';

import { navigateTo } from '../actions';
import LibraryScreen from './LibraryScreen';
import NowPlayingScreen from './NowPlayingScreen';

class Navigation extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._onBackPress.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._onBackPress.bind(this));
    }

    _onBackPress() {
        if(this.props.currentScreen != 'library') {
            this.props.dispatch(navigateTo('library'));
            return true;
        } else {
            return false;
        }
    }

    render() {
        if(this.props.currentScreen == 'now-playing') {
            return <NowPlayingScreen />;
        } else {
            return <LibraryScreen />;
        }
    }

}

function mapStateToProps(state) {
    return {
        currentScreen: state.currentScreen
    };
}

export default connect(mapStateToProps)(Navigation);
