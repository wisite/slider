import React from 'react';
import classnames from 'classnames';
import SliderBlock from './SliderBlock';

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  handleSwitch(dir) {
    const maxLen = this.props.children.length;
    let index = this.state.current + dir;
    if (index < 0) {
      index += maxLen;
    }

    if (index >= maxLen) {
      index -= maxLen;
    }
    this.setState({
      current: index,
    });
  }

  renderChildren() {
    const { children } = this.props;
    const { current } = this.state;
    return children.map((item, index) => {
      if(index===0) {
        let style = {
          marginLeft: `${-1 * current * 100}vw`,
        };
        return React.cloneElement(item, {style, key: index})
      }
      return item;
    });
  }

  render() {
    const me = this;
    const { handleSwitch } = me;
    const { className } = this.props;
    return (
      <div className={classnames({'neo-slider': true, [`${className}`]: !!className})}>
        <a
          className="neo-slider-left"
          onClick={handleSwitch.bind(me, -1)}
        >
          <i className="iconfont icon-left"/>
        </a>
        <a
          className="neo-slider-right"
          onClick={handleSwitch.bind(me, 1)}
        >
          <i className="iconfont icon-right"/>
        </a>
        <div className="neo-slider-list">
          {me.renderChildren()}
        </div>
      </div>
    );
  }
}

Slider.SliderBlock = SliderBlock;
export default Slider;