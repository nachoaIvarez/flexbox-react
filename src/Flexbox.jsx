import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

class Flexbox extends React.Component {
  styles() {
    const {
      alignContent,
      alignItems,
      flexDirection,
      flexWrap,
      height,
      justifyContent,
      margin,
      maxHeight,
      minHeight,
      maxWidth,
      minWidth,
      padding,
      width,
      inline,
      ...props
    } = this.props;

    const display = this.props.inline ? 'inline-flex' : 'flex';

    return prefixer.prefix({
      alignContent,
      alignItems,
      display,
      flexDirection,
      flexWrap,
      height,
      justifyContent,
      margin,
      maxHeight,
      minHeight,
      maxWidth,
      minWidth,
      padding,
      width,
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

Flexbox.propTypes = {
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  children: React.PropTypes.node,
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
  ]),
  height: PropTypes.string,
  inline: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  margin: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

export default Flexbox;
