/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CountryItem extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <View style={styles.view}>
        <Text
          style={[styles.countryCode, {backgroundColor: this.props.codeColor}]}>
          {this.props.country.country_code}
        </Text>
        <View>
          <Text style={[styles.nameText, styles.colorText]}>
            {this.props.country.name}
          </Text>
          <Text style={styles.colorText}>{this.props.country.capital}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  countryCode: {
    fontFamily: 'monospace',
    fontSize: 28,
    fontWeight: '700',
    width: 70,
    height: 70,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 7,
    marginRight: 10,
    color: '#FFFFFF',
  },

  nameText: {
    fontSize: 20,
    fontWeight: '500',
  },

  colorText: {
    color: '#FFFFFF',
  },
});
