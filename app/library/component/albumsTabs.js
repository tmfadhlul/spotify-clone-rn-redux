import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native'
import { View, Button, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import { tabAlbums } from '../actions';

class Playlist extends Component {

    componentWillMount() {
        this.getData()
    }

    getData = () => {
        this.props.dispatch(tabAlbums())
    }

    state = { selected: (new Map(): Map<string, boolean>) };

    render() {
        console.log(this.props)
        return (
            this.props.playlists.isLoading ?
                <View style={{ height: Dimensions.get('window').height / 1.5, justifyContent: 'center' }}>
                    <ActivityIndicator style={{ alignSelf: 'center', }} size="large" color="#00ff00" />
                </View>
                : (this.props.playlists.isError ? alert(this.props.playlists.artists) :
                    <FlatList
                        numColumns={1}
                        extraData={this.state}
                        data={this.props.playlists.albums}
                        refreshing={this.props.playlists.isLoading}
                        onRefresh={this.getData}
                        renderItem={(item) =>
                            <View style={{ flex: 5, flexDirection: 'row', height: 150, marginVertical: 8, marginHorizontal: 10, }} >
                                <Image
                                    style={{ width: '80%', height: '100%', flex: 2 }}
                                    source={{ uri: item.item.cover }}
                                />
                                <View style={{ marginLeft: 15, flex: 3 }} >
                                    <View style={{ marginTop: 55 }} >
                                        <Text style={{ color: 'white', fontSize: 18 }} >{item.item.name}</Text>
                                        <Text style={{ color: 'white', fontSize: 14 }}>From {item.item.artist.name}</Text>
                                        <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }} >Subscribe premium for this play...</Text>
                                    </View>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                )
        )
    }
};

const mapStateToProps = (state) => {
    return {
        playlists: state.tabPlaylistReducer
    }
}

export default connect(mapStateToProps)(Playlist);
