import React from 'react';
import PropTypes from 'prop-types';

class Line extends React.Component {
  render = () => {
    let { path, stroke, fill, strokeWidth } = this.props;
    return (
      <path
        d={path}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        />
    );
  };

  static propTypes = {
    path:         PropTypes.string.isRequired,
    stroke:       PropTypes.string,
    fill:         PropTypes.string,
    strokeWidth:  PropTypes.number
  };
  static defaultProps = {
    stroke:       'blue',
    fill:         'none',
    strokeWidth:  3
  };
}

export default Line;
