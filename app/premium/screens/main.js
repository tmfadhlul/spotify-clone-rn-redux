import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, ScrollView, Image, FlatList } from "react-native";
import { Icon, Header, Container, Left, Right, Button, Title, Body } from 'native-base';
import Video from 'react-native-video'

import { Color } from '../../index'


export default class SpotifyTab extends Component {

  state = {
    header: true,
    data: [
      { id: 1, title: "Made for you", source: require('../../src/source/1f032031892016f0f11eccb0fb109d25.jpg'), desc: 'Bravenworld Amandacoor, and more.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },
      { id: 2, title: "Play on demand", source: require('../../src/source/9ef078149304f1225fe81309ad86db3f--top--albums-cover-design.jpg'), desc: 'Menyambut hari dengan pilihan lagu yang bikin semangat pagi.' },

    ]

  }

  static navigationOptions = {



    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-analytics' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }} >
          {this.state.header === true ?
            <Header noShadow style={{ backgroundColor: 'transparent' }}>
              <Left style={{ position: 'relative', left: '-200%', zIndex: 0 }} >
                <Button transparent onPress={() => (this.props.navigation.goBack())} >
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body style={{ position: 'absolute', zIndex: 10, width: '50%', alignItems: 'center' }} >
                <Title>Premium</Title>
              </Body>
            </Header> : null}

          <ScrollView head
            onScroll={() => this.setState({ header: false })}
            onMomentumScrollEnd={() => this.setState({ header: true })}
            style={{ width: '100%' }}
          >
            <FlatList
              style={{ alignSelf: 'center' }}
              numColumns={1}
              // horizontal={true}
              data={this.state.data}
              renderItem={({ item }) =>
                <View style={{ width: '100%', marginVertical: 20 }} >
                  <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 24 }} >{item.title}</Text>
                  <View style={{ alignSelf: 'center' }} >
                    <Image
                      style={{ height: 100, width: 100, borderRadius: 100 }}
                      source={item.source}
                    />
                  </View>
                  <Text style={{ alignSelf: 'center', textAlign: 'center', width: '70%', color: 'white' }} >{item.desc}</Text>
                </View>}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
        </View>
        
      </View>
    )
  }
};

const styles = StyleSheet.create({
  LinearGradient: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})