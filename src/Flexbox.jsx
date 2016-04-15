import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

class Flexbox extends React.Component {
  styles() {
    return prefixer.prefix({
      alignContent: this.props.alignContent,
      alignItems: this.props.alignItems,
      display: this.props.inline ? 'inline-flex' : 'flex',
      flexDirection: this.props.flexDirection,
      flexWrap: this.props.flexWrap,
      height: this.props.height,
      justifyContent: this.props.justifyContent,
      margin: this.props.margin,
      padding: this.props.padding,
      width: this.props.width,
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
  padding: PropTypes.string,
  width: PropTypes.string,
};

export default Flexbox;
