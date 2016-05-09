import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

class FlexItem extends React.Component {
  styles() {
    const {
      alignSelf,
      flex,
      flexBasis,
      flexGrow,
      flexShrink,
      height,
      margin,
      maxHeight,
      minHeight,
      maxWidth,
      minWidth,
      order,
      padding,
      width,
      ...props
    } = this.props;

    return prefixer.prefix({
      alignSelf,
      flex,
      flexBasis,
      flexGrow,
      flexShrink,
      height,
      margin,
      maxHeight,
      minHeight,
      maxWidth,
      minWidth,
      order,
      padding,
      width
    });
  }
  render() {
    return (
      <div {...props} style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}

FlexItem.propTypes = {
  alignSelf: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  children: React.PropTypes.node,
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  height: PropTypes.string,
  margin: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  order: PropTypes.number,
  padding: PropTypes.string,
  width: PropTypes.string,
};

export default FlexItem;
