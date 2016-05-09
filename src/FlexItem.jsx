import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

const FlexItem = (props) => {
  const {
    style,
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
    ...other,
  } = props;

  const styles = prefixer.prefix({
    ...style,
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
  });

  return (
    <div {...other} style={styles}>
      {props.children}
    </div>
  );
};

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
  style: PropTypes.object,
  width: PropTypes.string,
};

export default FlexItem;
