import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import Line from './Line';

class DataSeries extends React.Component{
  render = () => {
    let { data, colors, xScale, yScale, interpolationType } = this.props;

    // work around for d3.scale.category10 is not a function (SO/questions/20590396)
    if( typeof colors === "undefined"){
      // colors = d3.scale.schemeCategory10();
      colors = d3.scale.category10().domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    let line = d3.svg.line()
      .interpolate(interpolationType)
      .x((d) => { return xScale(d.x); })
      .y((d) => { return yScale(d.y); });

    let lines = data.points.map((series, id) => {
      return (
        <Line
          path={line(series)}
          stroke={colors(id)}
          key={id}
          />
      );
    });

    return (
      <g>
        <g>{lines}</g>
      </g>
    );
  };

  static propTypes = {
    colors:             PropTypes.func,
    data:               PropTypes.object,
    interpolationType:  PropTypes.string,
    xScale:             PropTypes.func,
    yScale:             PropTypes.func
  };
  
  static defaultProps = {
    data:               [],
    interpolationType:  'cardinal'
    // colors:             d3.scale.schemeCategory10
  };
}

export default DataSeries;
