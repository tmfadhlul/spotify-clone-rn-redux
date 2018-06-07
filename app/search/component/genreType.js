import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class GenreType extends Component {

  state = {
    genre: [
      { id: 1, data: "New Relases", color: ['#1e3e67', '#6a3a54', '#bc3f45'] },
      { id: 2, data: "Charts", color: ['#1e3f68', '#1c7273', '#18b580'] },
      { id: 3, data: "Mood", color: ['#3b99f1', '#8fcfd8', '#bdeccc'] },
      { id: 4, data: "Pop", color: ['#3b28e4', '#354dd3', '#2597af'] },
      { id: 5, data: "Rock", color: ['#3a46b2', '#74508d', '#a35771'] },
      { id: 6, data: "Jazz", color: ['#981936', '#ac4a41', '#cd7a4e'] },
      { id: 7, data: "Alternative", color: ['#e736a2', '#ae3690', '#6d337d'] },
      { id: 8, data: "Franchphone", color: ['#2e3561', '#6d4357', '#b65447'] },
      { id: 9, data: "Fresh Find", color: ['#1e3e67', '#6a3a54', '#bc3f45'] },
      { id: 10, data: "EDM", color: ['#273c6b', '#4f698e', '#748ca6'] },
      { id: 11, data: "Party", color: ['#50364f', '#403557', '#2c335f'] },
      { id: 12, data: "Featured", color: ['#b53499', '#cd66ad', '#ea9ec2'] },
      { id: 13, data: "Blues", color: ['#1e3e67', '#6a3a54', '#bc3f45'] },
      { id: 14, data: "Country", color: ['#1e3f68', '#1c7273', '#18b580'] },
      { id: 15, data: "Funk", color: ['#3b99f1', '#8fcfd8', '#bdeccc'] },
      { id: 16, data: "Podcast", color: ['#3b28e4', '#354dd3', '#2597af'] },
      { id: 17, data: "Latin", color: ['#3a46b2', '#74508d', '#a35771'] },
      { id: 18, data: "Reggae", color: ['#981936', '#ac4a41', '#cd7a4e'] },
      { id: 19, data: "J-Tracks", color: ['#e736a2', '#ae3690', '#6d337d'] },
      { id: 20, data: "Classical", color: ['#2e3561', '#6d4357', '#b65447'] },
      { id: 21, data: "Folk & Accoustic", color: ['#1e3e67', '#6a3a54', '#bc3f45'] },
      { id: 22, data: "R & B", color: ['#273c6b', '#4f698e', '#748ca6'] },
      { id: 23, data: "Indie", color: ['#50364f', '#403557', '#2c335f'] },
      { id: 24, data: "Hip-Hop", color: ['#b53499', '#cd66ad', '#ea9ec2'] }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={this.state.genre}
          renderItem={({ item }) =>
              <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.2, y: 1}} style={styles.content} colors={item.color}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{item.data}</Text>
              </LinearGradient>
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({

  container: {
    position: 'relative',
    top: -30,
    width: '98%',
    height: '73%',
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
})