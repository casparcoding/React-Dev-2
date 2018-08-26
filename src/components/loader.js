import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loader extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div> <i className="fa fa-spinner fa-spin text-purple"/> </div>
      );
    } else {
      return (<span />);
    }
  }
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
