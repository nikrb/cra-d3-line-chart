import React from 'react';
import PropTypes from 'prop-types';
import d3 from 'd3';
import DataSeries from './DataSeries';
import XYAxis from './XYAxis';

class LineChart extends React.Component {
  render = () => {
    let { width, height, data } = this.props;
    const padding = 30;

    let xScale = d3.scale.ordinal()
                   .domain(data.xValues)
                   .rangePoints([padding, width - padding*2]);

    let yScale = d3.scale.linear()
                   .range([height - padding, padding])
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
          <XYAxis
            xScale={xScale}
            yScale={yScale}
            data={data}
            width={width}
            height={height}
            padding={padding}
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
