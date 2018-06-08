import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { View, Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux'
import { tabPlaylist } from '../actions';
import { Color } from '../../index';

class Playlist extends Component {

    componentWillMount() {
        this.props.dispatch(tabPlaylist())
    }

    state = { selected: (new Map(): Map<string, boolean>) };

    render() {
        return (
            <View>
                <Button rounded onPress={() => (this.props.navigation.navigate('Premium'))} style={styles.buttonRegist}>
                    <Text style={styles.textRegist}>CREATE</Text>
                </Button>
                <FlatList
                    numColumns={1}
                    extraData={this.state}
                    data={this.props.playlists.results}
                    refreshing={this.props.playlists.isLoading}
                    onRefresh={this.getData}
                    renderItem={(item) =>
                        <View style={{ flex: 5, flexDirection: 'row', height: 150, marginVertical: 8, marginHorizontal: 10, }} >
                            <Image
                                style={{ width: '80%', height: '100%', flex: 2 }}
                                source={{uri: item.item.artwork}}
                            />
                            <View style={{ marginLeft: 15, flex: 3 }} >
                                <View style={{ marginTop: 55 }} >
                                    <Text style={{ color: 'white', fontSize: 18 }} >{item.item.title}</Text>
                                    <Text style={{ color: 'white', fontSize: 14 }}>From {item.item.artist}</Text>
                                    <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }} >Subscribe premium for this play...</Text>
                                </View>
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        playlists: state.tabPlaylistReducer
    }
}

export default connect(mapStateToProps)(Playlist);

const navigateAction = NavigationActions.navigate({
    routeName: 'LoginScreen',
});


const styles = StyleSheet.create({
    buttonRegist: {
        backgroundColor: 'white',
        width: '40%',
        height: 45,
        marginHorizontal: 30,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textRegist: {
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        position: 'relative',
        height: 100,
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 5,
    }
}
)