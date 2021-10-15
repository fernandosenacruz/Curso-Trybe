import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

Image.prototype = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired
}

Image.defaultProps = {
  source: 'xibil',
  alternativeText: 'xelo'
}

export default Image;