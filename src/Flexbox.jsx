import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

const Flexbox = (props) => {
  const {
    style,
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
    ...other,
  } = props;

  const display = inline ? 'inline-flex' : 'flex';

  const styles = prefixer.prefix({
    ...style,
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

  return (
    <div {...other} style={styles}>
      {this.props.children}
    </div>
  );
};

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
  style: PropTypes.object,
  width: PropTypes.string,
};

export default Flexbox;
