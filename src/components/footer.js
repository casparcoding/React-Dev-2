import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <footer className="w-100" style={this.props.style}>
        <div className="pt-5 pb-4 text text-center">
          <strong className="text-700 text-purple"> Carl Dantiff@2018 </strong>
          <span> . All rights reserved. </span> 
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Footer;
