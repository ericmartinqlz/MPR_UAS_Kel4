/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class DetailScreen extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.country = props.route.params.country;

    this.state = {
      region: {
        latitude: this.country.latlng[0],
        longitude: this.country.latlng[1],
        latitudeDelta: 15,
        longitudeDelta: 15,
      },
    };

    this.getInitialState = this.getInitialState.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  getInitialState() {
    return {
      region: {
        latitude: this.country.latlng[0],
        longitude: this.country.latlng[1],
        latitudeDelta: 15,
        longitudeDelta: 15,
      },
    };
  }

  onRegionChange(region) {
    this.setState({region});
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Text
          style={[
            styles.textColor,
            styles.textTitle,
          ]}>{`${this.country.name} (${this.country.country_code})`}</Text>
        <View>
          <View style={[styles.div, styles.mapCont]}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={this.state.region}
              onRegionChange={this.onRegionChange}
            />
          </View>

          <View style={styles.div}>
            <Text style={[styles.textColor, styles.textSubTitle]}>Ibukota</Text>
            <Text style={[styles.textColor, styles.text]}>
              {this.country.capital}
            </Text>
          </View>

          <View style={styles.div}>
            <Text style={[styles.textColor, styles.textSubTitle]}>
              Koordinat
            </Text>
            <Text style={[styles.textColor, styles.text]}>
              (Lat) {this.country.latlng[0]}
            </Text>
            <Text style={[styles.textColor, styles.text]}>
              (Long) {this.country.latlng[1]}
            </Text>
          </View>

          <View style={styles.div}>
            <Text style={[styles.textColor, styles.textSubTitle]}>
              Zona Waktu
            </Text>
            {this.country.timezones.map((timezone, index) => (
              <Text key={index} style={[styles.textColor, styles.text]}>
                {timezone}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#303030',
    minHeight: 800,
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },

  div: {
    marginBottom: 20,
  },

  mapCont: {
    alignItems: 'center',
  },

  map: {
    alignItems: 'center',
    width: 300,
    height: 300,
  },

  textColor: {
    color: '#FFFFFF',
  },

  textTitle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '700',
    margin: 20,
  },

  textSubTitle: {
    fontSize: 28,
    fontWeight: '500',
  },

  text: {
    fontSize: 16,
  },
});
