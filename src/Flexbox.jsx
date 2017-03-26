import React, { PropTypes } from 'react';
import styled from 'styled-components';

const { string, oneOf, node, number, bool, object } = PropTypes;

const Flexbox = styled(({
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
  ...props
}) => React.createElement(element, props, children))`
  ${props => props.alignContent ? `align-content: ${props.alignContent};` : ''}
  ${props => props.alignSelf ? `align-self: ${props.alignSelf};` : ''}
  ${props => props.alignItems ? `align-items: ${props.alignItems};` : ''}
  ${props => props.display ? `display: ${props.display};` : ''}
  ${props => props.flex ? `flex: ${props.flex};` : ''}
  ${props => props.flexBasis ? `flex-basis: ${props.flexBasis};` : ''}
  ${props => props.flexDirection ? `flex-direction: ${props.flexDirection};` : ''}
  ${props => props.flexGrow ? `flex-grow: ${props.flexGrow};` : ''}
  ${props => props.flexShrink ? `flex-shrink: ${props.flexShrink};` : ''}
  ${props => props.flexWrap ? `flex-wrap: ${props.flexWrap};` : ''}
  ${props => props.height ? `height: ${props.height};` : ''}
  ${props => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${props => props.margin ? `margin: ${props.margin};` : ''}
  ${props => props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ''}
  ${props => props.marginLeft ? `margin-left: ${props.marginLeft};` : ''}
  ${props => props.marginRight ? `margin-right: ${props.marginRight};` : ''}
  ${props => props.marginTop ? `margin-top: ${props.marginTop};` : ''}
  ${props => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
  ${props => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
  ${props => props.minHeight ? `min-height: ${props.minHeight};` : ''}
  ${props => props.minWidth ? `min-width: ${props.minWidth};` : ''}
  ${props => props.order ? `order: ${props.order};` : ''}
  ${props => props.padding ? `padding: ${props.padding};` : ''}
  ${props => props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ''}
  ${props => props.paddingLeft ? `padding-left: ${props.paddingLeft};` : ''}
  ${props => props.paddingRight ? `padding-right: ${props.paddingRight};` : ''}
  ${props => props.paddingTop ? `padding-top: ${props.paddingTop};` : ''}
  ${props => props.width ? `width: ${props.width};` : ''}
`;

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
