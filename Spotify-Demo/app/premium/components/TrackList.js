import React, { Component, PropTypes } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';

import Track from './Track';
import { fetchLibrary } from '../actions';

import TrackPlayer from 'react-native-track-player';

class TrackList extends Component {

    state = { selected: (new Map(): Map<string, boolean>) };

    componentDidMount() {
        this.props.dispatch(fetchLibrary());
    }

    _keyExtractor(item) {
        return item.id;
    }

    _renderItem({item}) {
        return (
            <Track
                track={item}
                onPress={async () => {
                    // TODO sort out
                    console.log(item);
                    await TrackPlayer.setupPlayer({});
                    await TrackPlayer.add({ ...item });
                    TrackPlayer.play();
                }}
            />
        );
    }

    render() {
        if(this.props.fetching) {
            return (
                <ActivityIndicator
                    size="large"
                    color="#1db954"
                    style={{margin: 50}}
                />
            );
        }

        return (
            <FlatList
                data={this.props.tracks || []}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.library.tracks,
        fetching: state.library.fetching,
        error: state.library.error
    };
}

export default connect(mapStateToProps)(TrackList);
