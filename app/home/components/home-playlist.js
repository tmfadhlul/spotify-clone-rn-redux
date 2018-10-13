import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { ScrollView, Image, FlatList } from "react-native";

import { Color } from 'app/index'
import { stylesHomePlaylist as styles } from '../style'

const mockData = {
    genre: [
        { id: 1, title: "Made for you", source: require('app/src/source/1f032031892016f0f11eccb0fb109d25.jpg'), desc: 'Bravenworld Amandacoor, and more.' },
        { id: 2, title: "Play on demand", source: require('app/src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
        { id: 3, title: "Lagu Jaman Gue Nih !", source: require('app/src/source/32b467be1ad9b7c6db2671bc3ffd69ab.jpg'), desc: 'Kangen hits terbaik tahun 2010-2015? \n Mari merapat.' },
        { id: 4, title: "", source: require('app/src/source/24ff75355ae47f9c2b22f394d3ca288b.jpg'), desc: 'Lebih bahagia di akhir pekan ini ditemani Jaz dan musik terhandal.' },
        { id: 5, title: "", source: require('app/src/source/blizzard-album-cover.jpg'), desc: 'For your singing pleasure, the most memorable pop and rock anthems.' },
        { id: 6, title: "", source: require('app/src/source/The-Black-Arrow-In-Bloom-Large_thumb.jpg'), desc: 'Diva out by belting out pop hits by bloom.' },
        { id: 7, title: "", source: require('app/src/source/blurryface_album.jpg'), desc: 'Easy listening pop from all your favorite artist!.' },
        { id: 8, title: "", source: require('app/src/source/a5f292c190068a898c92eb543e5cc144.jpg'), desc: 'Twentyone Pilots, The essenstial tracks,\n all in one playlist.' },
        { id: 9, title: "", source: require('app/src/source/f5a051777ad0fa529fcc5c9c0c14b34f--art-google-cover-art.jpg'), desc: 'From harder to breather to their latest albums, Red Pill Blues, th pop' },
        { id: 10, title: "", source: require('app/src/source/art1.jpg'), desc: 'Relive southest Asia most adored pop hits from the 2000s. ' },
        { id: 11, title: "", source: require('app/src/source/script.png'), desc: 'Check out this collection of hits by the Honolulu pop phenom.' },
        { id: 12, title: "", source: require('app/src/source/0239bf050136e6fcc32951c936c44f84.jpg'), desc: 'Hear best symphony music, just here' },
        { id: 13, title: "", source: require('app/src/source/v600_artworks-000038630805-yjfp0y-large-e1360775311335.jpeg'), desc: 'Look closer for your mood.' },
        { id: 14, title: "", source: require('app/src/source/no_yes_no02.jpg'), desc: 'Yes or No, The essenstial tracks,\n all in one playlist.' },
        { id: 15, title: "", source: require('app/src/source/SchwarzWeiss_-_Cover.jpg'), desc: 'For your singing pleasure, the most memorable pop and rock anthems' },
    ]
}

const HomePlaylist = (props) => {
    return (
        <View style={{ width: '100%', flex: 1, top: 70 }} >
            <View style={styles.container}>
                <Text style={styles.title}> Hey </Text>
                <Text style={styles.h2}> Here are some playlist base on your music taste </Text>
            </View>
            <View style={styles.content}>
                <ScrollView style={{ width: '100%', alignSelf: 'center' }} >
                    <View style={{ top: 0, zIndex: 5, }}>
                        <Image
                            style={styles.wrapperImg}
                            source={require('app/src/source/blackHome.png')}
                        />
                    </View>
                    <View style={{ height: '100%', marginTop: -580, zIndex: 10 }} >

                        <View style={{ backgroundColor: Color.black }} >
                            <FlatList
                                numColumns={1}
                                // horizontal={true}
                                data={mockData.genre}
                                renderItem={({ item }) =>
                                    <View>
                                        <Text style={styles.contentTitle}>{item.title}</Text>
                                        <View >
                                            <Image
                                                style={styles.contentImg}
                                                source={item.source}
                                            />

                                        </View>
                                        <Text style={styles.contentDesc}>{item.desc}</Text>
                                    </View>}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}

export default HomePlaylist