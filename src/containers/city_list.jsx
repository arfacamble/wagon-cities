import React, { Component } from 'react';
import ListItem from './list_item';

class CityList extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <ListItem city={city} key={city.slug} />)}
      </div>
    )
  }
}

export default CityList;
