/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import CountryList from './CountryList';

export default class HomeScreen extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <View style={styles.view}>
        <CountryList navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#303030',
    minHeight: 800,
  },
});
