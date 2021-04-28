import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedCity extends Component {
  static defaultProps = {
    activeCity: { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" }
  }

  render() {
    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={src} alt="" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(SelectedCity);
