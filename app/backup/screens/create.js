import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import Form from '../component/from'

class TodoCreate extends Component {

  handleCreate(value){
    alert(JSON.stringify(value))
  }

    render() {
  return (
    <Container style={styles.container} >
      <Form { ... this.props } onSubmit={this.handleCreate.bind(this)} />
    </Container>
  )
}
}

export default connect()(TodoCreate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
