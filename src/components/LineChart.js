import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import DataSeries from './DataSeries';

class LineChart extends React.Component {
  render = () => {
    let { width, height, data } = this.props;

    let xScale = d3.scale.ordinal()
                   .domain(data.xValues)
                   .rangePoints([0, width]);

    let yScale = d3.scale.linear()
                   .range([height, 10])
                   .domain([data.yMin, data.yMax]);

    return (
      <svg width={width} height={height}>
          <DataSeries
            xScale={xScale}
            yScale={yScale}
            data={data}
            width={width}
            height={height}
            />
      </svg>
    );
  };

  static propTypes = {
    width:  PropTypes.number,
    height: PropTypes.number,
    data:   PropTypes.object.isRequired
  };

  static defaultProps = {
    width:  600,
    height: 300
  };
}

export default LineChart;
