import React, { Component } from 'react';
import Slider, {Range} from 'rc-slider';
import Tooltip from 'rc-tooltip';

import 'rc-slider/assets/index.css';
import './../styles/Slider.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class SpendingSlider extends Component {

  render() {
    return (
        <div className="Slider">
          <div className="SliderLabel">{this.props.sliderLabel}</div>
          <Slider min={0} max={this.props.amount*10} handle={handle} defaultValue={this.props.amount}/>
        </div>
    );
  }
}

export default SpendingSlider;
