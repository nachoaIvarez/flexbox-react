import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// The number `0` with no unit is a valid CSS length, see:
//   https://www.w3.org/TR/CSS2/syndata.html#length-units
// Though it might be inappropriate/avoidable in certain contexts, if it is
// valid CSS, we should allow it.
const isTruthyOrZero = value => value || value === 0;

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
  ${props => (isTruthyOrZero(props.flex) ? `flex: ${props.flex};` : '')}
  ${props => (isTruthyOrZero(props.flexBasis) ? `flex-basis: ${props.flexBasis};` : '')}
  ${props => (props.flexDirection ? `flex-direction: ${props.flexDirection};` : '')}
  ${props => (isTruthyOrZero(props.flexGrow) ? `flex-grow: ${props.flexGrow};` : '')}
  ${props => (isTruthyOrZero(props.flexShrink) ? `flex-shrink: ${props.flexShrink};` : '')}
  ${props => (props.flexWrap ? `flex-wrap: ${props.flexWrap};` : '')}
  ${props => (isTruthyOrZero(props.height) ? `height: ${props.height};` : '')}
  ${props => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${props => (isTruthyOrZero(props.margin) ? `margin: ${props.margin};` : '')}
  ${props => (isTruthyOrZero(props.marginBottom) ? `margin-bottom: ${props.marginBottom};` : '')}
  ${props => (isTruthyOrZero(props.marginLeft) ? `margin-left: ${props.marginLeft};` : '')}
  ${props => (isTruthyOrZero(props.marginRight) ? `margin-right: ${props.marginRight};` : '')}
  ${props => (isTruthyOrZero(props.marginTop) ? `margin-top: ${props.marginTop};` : '')}
  ${props => (isTruthyOrZero(props.maxHeight) ? `max-height: ${props.maxHeight};` : '')}
  ${props => (isTruthyOrZero(props.maxWidth) ? `max-width: ${props.maxWidth};` : '')}
  ${props => (isTruthyOrZero(props.minHeight) ? `min-height: ${props.minHeight};` : '')}
  ${props => (isTruthyOrZero(props.minWidth) ? `min-width: ${props.minWidth};` : '')}
  ${props => (isTruthyOrZero(props.order) ? `order: ${props.order};` : '')}
  ${props => (isTruthyOrZero(props.padding) ? `padding: ${props.padding};` : '')}
  ${props => (isTruthyOrZero(props.paddingBottom) ? `padding-bottom: ${props.paddingBottom};` : '')}
  ${props => (isTruthyOrZero(props.paddingLeft) ? `padding-left: ${props.paddingLeft};` : '')}
  ${props => (isTruthyOrZero(props.paddingRight) ? `padding-right: ${props.paddingRight};` : '')}
  ${props => (isTruthyOrZero(props.paddingTop) ? `padding-top: ${props.paddingTop};` : '')}
  ${props => (isTruthyOrZero(props.width) ? `width: ${props.width};` : '')}
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
  display: PropTypes.oneOf(['flex', 'inline-flex']),
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
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inline: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  order: PropTypes.number,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Flexbox.defaultProps = {
  display: 'flex',
  element: 'div',
};

export default Flexbox;
