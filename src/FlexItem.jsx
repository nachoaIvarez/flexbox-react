import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

class FlexItem extends React.Component {
  styles() {
    return prefixer.prefix({
      order: this.props.order,
      flexGrow: this.props.flexGrow,
      flexShrink: this.props.flexShrink,
      flexBasis: this.props.flexBasis,
      flex: this.props.flex,
    });
  }
  render() {
    return (
      <div style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}

FlexItem.propTypes = {
  order: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.string,
  flex: PropTypes.string,
  alignSelf: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  children: React.PropTypes.node,
};

export default FlexItem;
