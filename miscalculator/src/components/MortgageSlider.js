import React, { Component } from 'react';
import Slider, {Range} from 'rc-slider';

import 'rc-slider/assets/index.css';
import './../styles/Slider.css';

class MortgageSlider extends Component {
  render() {
    return (
      <div className="Slider">
        <div className="SliderLabel">Mortgage</div>
        <Slider min={0} max={20} defaultValue={3}/>
      </div>
    );
  }
}

export default MortgageSlider;
