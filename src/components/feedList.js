import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FeedList extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>FeedList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
});

export default FeedList;
