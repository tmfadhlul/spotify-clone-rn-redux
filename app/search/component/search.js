import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


export default class Search extends Component {

  render() {
    return (
      <Container>
        <Header searchBar rounded style={styles.wrapper}>
          <Item style={styles.center}>
            <Icon name="ios-search" />
            <Input placeholder="Artist, song or playlist" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    top: 60,
    height: 40,
    width: 370,
    backgroundColor: 'white',
    borderRadius: 7,
  }
})