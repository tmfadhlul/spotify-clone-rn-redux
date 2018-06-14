import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, Image } from 'react-native'
import { View, Button } from 'native-base';

export default class Podcast extends Component {
    state = {
        genre: [
            { id: 11, title: "Rock", source: require('../../src/source/script.png'), desc: 'Check out this collection of hits by the Honolulu pop phenom.' },
            { id: 12, title: "Mood", source: require('../../src/source/0239bf050136e6fcc32951c936c44f84.jpg'), desc: 'Hear best symphony music, just here' },
            { id: 13, title: "Jazz", source: require('../../src/source/v600_artworks-000038630805-yjfp0y-large-e1360775311335.jpeg'), desc: 'Look closer for your mood.' },
            { id: 5, title: "Classical", source: require('../../src/source/blizzard-album-cover.jpg'), desc: 'For your singing pleasure, the most memorable pop and rock anthems.' },
            { id: 6, title: "Blues", source: require('../../src/source/The-Black-Arrow-In-Bloom-Large_thumb.jpg'), desc: 'Diva out by belting out pop hits by bloom.' },
            { id: 15, title: "Featured", source: require('../../src/source/SchwarzWeiss_-_Cover.jpg'), desc: 'For your singing pleasure, the most memorable pop and rock anthems' },
            { id: 7, title: "Favourites", source: require('../../src/source/blurryface_album.jpg'), desc: 'Easy listening pop from all your favorite artist!.' },
            { id: 8, title: "Mine", source: require('../../src/source/a5f292c190068a898c92eb543e5cc144.jpg'), desc: 'Twentyone Pilots, The essenstial tracks,\n all in one playlist.' },
            { id: 9, title: "Charts", source: require('../../src/source/f5a051777ad0fa529fcc5c9c0c14b34f--art-google-cover-art.jpg'), desc: 'From harder to breather to their latest albums, Red Pill Blues, th pop' },
            { id: 10, title: "Pop", source: require('../../src/source/art1.jpg'), desc: 'Relive southest Asia most adored pop hits from the 2000s. ' },
            { id: 14, title: "Alternative", source: require('../../src/source/no_yes_no02.jpg'), desc: 'Yes or No, The essenstial tracks,\n all in one playlist.' },
            { id: 1, title: "Hip-hop", source: require('../../src/source/1f032031892016f0f11eccb0fb109d25.jpg'), desc: 'Bravenworld Amandacoor, and more.' },
            { id: 2, title: "Reggae", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
            { id: 3, title: "Indie", source: require('../../src/source/32b467be1ad9b7c6db2671bc3ffd69ab.jpg'), desc: 'Kangen hits terbaik tahun 2010-2015? \n Mari merapat.' },
            { id: 4, title: "Folk & Accoustic", source: require('../../src/source/24ff75355ae47f9c2b22f394d3ca288b.jpg'), desc: 'Lebih bahagia di akhir pekan ini ditemani Jaz dan musik terhandal.' },
        ]
    }

    render() {
        return (
            <View>
                <Button rounded onPress={() => (this.props.navigation.navigate('Premium'))} style={styles.buttonRegist}>
                    <Text style={styles.textRegist}>CREATE</Text>
                </Button>
                <FlatList
                    numColumns={1}
                    data={this.state.genre}
                    renderItem={({ item }) =>
                        <View style={{ flex: 5, flexDirection: 'row', height: 150, marginVertical: 8, marginHorizontal: 10, }} >
                            <Image
                                style={{ width: '80%', height: '100%', flex: 2 }}
                                source={item.source}
                            />
                            <View style={{ marginLeft: 15, flex: 3 }} >
                                <View style={{ marginTop: 55 }} >
                                    <Text style={{ color: 'white', fontSize: 18 }} >{item.title}</Text>
                                    <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }} >Subscribe premium for this play..</Text>
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


const styles = StyleSheet.create({
    buttonRegist: {
        backgroundColor: 'white',
        width: '40%',
        height: 45,
        marginTop: 30,
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