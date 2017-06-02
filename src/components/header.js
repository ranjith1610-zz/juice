import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          LolMeNow
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Header;
