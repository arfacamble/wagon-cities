import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className="list-group-item">{this.props.city.name}</div>
    );
  }
}

export default ListItem;
