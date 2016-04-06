import React, { PropTypes } from 'react';
import autoprefixer from 'autoprefixer';
import postcssJs from 'postcss-js';

const prefixer = postcssJs.sync([autoprefixer]);

class Flexbox extends React.Component {
  styles() {
    return prefixer({
      display: this.props.inline ? 'inline-flex' : 'flex',
      alignContent: this.props.alignContent,
      alignItems: this.props.alignItems,
      flexDirection: this.props.flexDirection,
      justifyContent: this.props.justifyContent,
      flexWrap: this.props.flexWrap,
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
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
  ]),
  inline: PropTypes.bool,
  children: React.PropTypes.node,
};

export default Flexbox;
