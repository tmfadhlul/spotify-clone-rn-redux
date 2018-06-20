import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';
import { Icon, Item, Button, Container, Header, Input } from 'native-base';

import { GenreType, Search } from '../component/index';
import { Color } from '../../index';

export default class SearchTab extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-search' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.wrapperImg}
          source={require('../../src/source/searchBack.png')}
        />
        <Search />
        <GenreType />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.black
  },
  wrapperImg: {
    flex: 1,
    position: 'absolute',
    top: 0
  },
})