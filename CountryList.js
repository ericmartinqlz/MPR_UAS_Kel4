/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';

import CountryItem from './CountryItem';

export default class CountryList extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      countries: [],
    };

    this.getCountries = this.getCountries.bind(this);
    this.getDarkColor = this.getDarkColor.bind(this);
  }

  async getCountries() {
    const response = await fetch(
      'https://gist.githubusercontent.com/erdem/8c7d26765831d0f9a8c62f02782ae00d/raw/248037cd701af0a4957cce340dabb0fd04e38f4c/countries.json',
    );
    const responseJson = await response.json();

    this.setState({
      countries: responseJson,
    });
  }

  getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }


  componentDidMount() {
    this.getCountries();
  }

  render() {
    return (
      <ScrollView>
        {this.state.countries.map((country, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => this.props.navigation.navigate('Detail', {country})}>
            <CountryItem
              country={country}
              codeColor={this.getDarkColor()}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
