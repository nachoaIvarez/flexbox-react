'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// The number `0` with no unit is a valid CSS length, see:
//   https://www.w3.org/TR/CSS2/syndata.html#length-units
// Though it might be inappropriate/avoidable in certain contexts, if it is
// valid CSS, we should allow it.
var isTruthyOrZero = function isTruthyOrZero(value) {
  return value || value === 0;
};

var Flexbox = (0, _styledComponents2.default)(function (_ref) {
  var alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      children = _ref.children,
      display = _ref.display,
      element = _ref.element,
      flex = _ref.flex,
      flexBasis = _ref.flexBasis,
      flexDirection = _ref.flexDirection,
      flexGrow = _ref.flexGrow,
      flexShrink = _ref.flexShrink,
      flexWrap = _ref.flexWrap,
      height = _ref.height,
      justifyContent = _ref.justifyContent,
      margin = _ref.margin,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      marginTop = _ref.marginTop,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth,
      minHeight = _ref.minHeight,
      minWidth = _ref.minWidth,
      order = _ref.order,
      padding = _ref.padding,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight,
      paddingTop = _ref.paddingTop,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ['alignContent', 'alignItems', 'alignSelf', 'children', 'display', 'element', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'height', 'justifyContent', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'order', 'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'width']);

  return _react2.default.createElement(element, props, children);
})(_templateObject, function (props) {
  return props.alignContent ? 'align-content: ' + props.alignContent + ';' : '';
}, function (props) {
  return props.alignSelf ? 'align-self: ' + props.alignSelf + ';' : '';
}, function (props) {
  return props.alignItems ? 'align-items: ' + props.alignItems + ';' : '';
}, function (props) {
  return props.display ? 'display: ' + props.display + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.flex) ? 'flex: ' + props.flex + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.flexBasis) ? 'flex-basis: ' + props.flexBasis + ';' : '';
}, function (props) {
  return props.flexDirection ? 'flex-direction: ' + props.flexDirection + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.flexGrow) ? 'flex-grow: ' + props.flexGrow + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.flexShrink) ? 'flex-shrink: ' + props.flexShrink + ';' : '';
}, function (props) {
  return props.flexWrap ? 'flex-wrap: ' + props.flexWrap + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.height) ? 'height: ' + props.height + ';' : '';
}, function (props) {
  return props.justifyContent ? 'justify-content: ' + props.justifyContent + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.margin) ? 'margin: ' + props.margin + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.marginBottom) ? 'margin-bottom: ' + props.marginBottom + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.marginLeft) ? 'margin-left: ' + props.marginLeft + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.marginRight) ? 'margin-right: ' + props.marginRight + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.marginTop) ? 'margin-top: ' + props.marginTop + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.maxHeight) ? 'max-height: ' + props.maxHeight + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.maxWidth) ? 'max-width: ' + props.maxWidth + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.minHeight) ? 'min-height: ' + props.minHeight + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.minWidth) ? 'min-width: ' + props.minWidth + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.order) ? 'order: ' + props.order + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.padding) ? 'padding: ' + props.padding + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.paddingBottom) ? 'padding-bottom: ' + props.paddingBottom + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.paddingLeft) ? 'padding-left: ' + props.paddingLeft + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.paddingRight) ? 'padding-right: ' + props.paddingRight + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.paddingTop) ? 'padding-top: ' + props.paddingTop + ';' : '';
}, function (props) {
  return isTruthyOrZero(props.width) ? 'width: ' + props.width + ';' : '';
});

Flexbox.propTypes = {
  alignContent: _propTypes2.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: _propTypes2.default.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: _propTypes2.default.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  children: _propTypes2.default.node,
  display: _propTypes2.default.oneOf(['flex', 'inline-flex']),
  element: _propTypes2.default.oneOf(['article', 'aside', 'div', 'figure', 'footer', 'header', 'main', 'nav', 'section']),
  flex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexBasis: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexDirection: _propTypes2.default.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexShrink: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexWrap: _propTypes2.default.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  inline: _propTypes2.default.bool,
  justifyContent: _propTypes2.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  margin: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginBottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginLeft: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginRight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginTop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  minHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  minWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  order: _propTypes2.default.number,
  padding: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingBottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingLeft: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingRight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingTop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Flexbox.defaultProps = {
  display: 'flex',
  element: 'div'
};

exports.default = Flexbox;