/**
 * Created by ssehacker on 2017/2/26.
 */
import React from 'react';
import classnames from 'classnames';

class SliderBlock extends React.Component {
  render() {
    const { className, ...other} = this.props;
    return (
      <div
        className={classnames({'neo-slider-list-item': true, [`${className}`]: !!className})}
        {...other}
      >
        {this.props.children}
      </div>
    )
  }
}

export default SliderBlock;