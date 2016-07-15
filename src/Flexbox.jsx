import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';
import pickBy from 'lodash.pickby';

const prefixer = new Prefixer();

const Flexbox = (props) => {
  const {
    alignContent,
    alignItems,
    alignSelf,
    children,
    display,
    element,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    order,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    style,
    width,
    ...other,
  } = props;

  const styles = prefixer.prefix(
    pickBy({
      alignContent,
      alignItems,
      alignSelf,
      display,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      height,
      justifyContent,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      order,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      width,
      ...style,
    }, prop => prop !== undefined)
  );

  return React.createElement(element, {
    ...other,
    style: styles,
  }, children);
};

Flexbox.propTypes = {
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch',
  ]),
  alignSelf: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch',
  ]),
  children: PropTypes.node,
  display: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
  element: PropTypes.oneOf([
    PropTypes.element,
    'article',
    'aside',
    'div',
    'figure',
    'footer',
    'header',
    'main',
    'nav',
    'section',
  ]),
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.oneOf([
    'column-reverse',
    'column',
    'row-reverse',
    'row',
  ]),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap-reverse',
    'wrap',
  ]),
  height: PropTypes.string,
  inline: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
  ]),
  margin: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  order: PropTypes.number,
  padding: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
};

Flexbox.defaultProps = {
  display: 'flex',
  element: 'div',
};

export default Flexbox;
