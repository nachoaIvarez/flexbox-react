import React, { PropTypes } from 'react';
import styled from 'styled-components';

const { string, oneOf, node, number, bool, object } = PropTypes;

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
    width,
    ...otherProps
  } = props;

  const StyledComponent = styled(element)`
    ${alignContent ? `align-content: ${alignContent};` : ''}
    ${alignItems ? `align-items: ${alignItems};` : ''}
    ${alignSelf ? `align-self: ${alignSelf};` : ''}
    ${display ? `display: ${display};` : ''}
    ${flex ? `flex: ${flex};` : ''}
    ${flexBasis ? `flex-basis: ${flexBasis};` : ''}
    ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
    ${flexGrow ? `flex-grow: ${flexGrow};` : ''}
    ${flexShrink ? `flex-shrink: ${flexShrink};` : ''}
    ${flexWrap ? `flex-wrap: ${flexWrap};` : ''}
    ${height ? `height: ${height};` : ''}
    ${justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${margin ? `margin: ${margin};` : ''}
    ${marginBottom ? `margin-bottom: ${marginBottom};` : ''}
    ${marginLeft ? `margin-left: ${marginLeft};` : ''}
    ${marginRight ? `margin-right: ${marginRight};` : ''}
    ${marginTop ? `margin-top: ${marginTop};` : ''}
    ${maxHeight ? `max-height: ${maxHeight};` : ''}
    ${maxWidth ? `max-width: ${maxWidth};` : ''}
    ${minHeight ? `min-height: ${minHeight};` : ''}
    ${minWidth ? `min-width: ${minWidth};` : ''}
    ${order ? `order: ${order};` : ''}
    ${padding ? `padding: ${padding};` : ''}
    ${paddingBottom ? `padding-bottom: ${paddingBottom};` : ''}
    ${paddingLeft ? `padding-left: ${paddingLeft};` : ''}
    ${paddingRight ? `padding-right: ${paddingRight};` : ''}
    ${paddingTop ? `padding-top: ${paddingTop};` : ''}
    ${width ? `width: ${width};` : ''}
  `;

  return React.createElement(StyledComponent, otherProps, children);
};

Flexbox.propTypes = {
  alignContent: oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  children: node,
  display: oneOf(['flex', 'inline-flex']),
  element: oneOf([
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
  flex: string,
  flexBasis: string,
  flexDirection: oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: number,
  flexShrink: number,
  flexWrap: oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  height: string,
  inline: bool,
  justifyContent: oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  margin: string,
  marginBottom: string,
  marginLeft: string,
  marginRight: string,
  marginTop: string,
  maxHeight: string,
  maxWidth: string,
  minHeight: string,
  minWidth: string,
  order: number,
  padding: string,
  paddingBottom: string,
  paddingLeft: string,
  paddingRight: string,
  paddingTop: string,
  style: object,
  width: string,
};

Flexbox.defaultProps = {
  display: 'flex',
  element: 'div',
};

export default Flexbox;
