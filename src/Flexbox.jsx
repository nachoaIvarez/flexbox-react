import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

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
  ${props => (props.alignContent ? `align-content: ${props.alignContent};` : '')}
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf};` : '')}
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${props => (props.display ? `display: ${props.display};` : '')}
  ${props => (props.flex ? `flex: ${props.flex};` : '')}
  ${props => (props.flexBasis ? `flex-basis: ${props.flexBasis};` : '')}
  ${props => (props.flexDirection ? `flex-direction: ${props.flexDirection};` : '')}
  ${props => (props.flexGrow ? `flex-grow: ${props.flexGrow};` : '')}
  ${props => (props.flexShrink ? `flex-shrink: ${props.flexShrink};` : '')}
  ${props => (props.flexWrap ? `flex-wrap: ${props.flexWrap};` : '')}
  ${props => (props.height ? `height: ${props.height};` : '')}
  ${props => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
  ${props => (props.marginBottom ? `margin-bottom: ${props.marginBottom};` : '')}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft};` : '')}
  ${props => (props.marginRight ? `margin-right: ${props.marginRight};` : '')}
  ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : '')}
  ${props => (props.maxHeight ? `max-height: ${props.maxHeight};` : '')}
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')}
  ${props => (props.minHeight ? `min-height: ${props.minHeight};` : '')}
  ${props => (props.minWidth ? `min-width: ${props.minWidth};` : '')}
  ${props => (props.order ? `order: ${props.order};` : '')}
  ${props => (props.padding ? `padding: ${props.padding};` : '')}
  ${props => (props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : '')}
  ${props => (props.paddingLeft ? `padding-left: ${props.paddingLeft};` : '')}
  ${props => (props.paddingRight ? `padding-right: ${props.paddingRight};` : '')}
  ${props => (props.paddingTop ? `padding-top: ${props.paddingTop};` : '')}
  ${props => (props.width ? `width: ${props.width};` : '')}
`;

Flexbox.propTypes = {
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  children: PropTypes.node,
  display: PropTypes.oneOf(['block', 'flex', 'inline-flex']),
  element: PropTypes.oneOf([
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
  flexDirection: PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
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
