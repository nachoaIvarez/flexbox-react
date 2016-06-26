'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var prefixer = new _inlineStylePrefixer2.default();

var Flexbox = function Flexbox(props) {
  var alignContent = props.alignContent;
  var alignItems = props.alignItems;
  var alignSelf = props.alignSelf;
  var children = props.children;
  var display = props.display;
  var element = props.element;
  var flex = props.flex;
  var flexBasis = props.flexBasis;
  var flexDirection = props.flexDirection;
  var flexGrow = props.flexGrow;
  var flexShrink = props.flexShrink;
  var flexWrap = props.flexWrap;
  var height = props.height;
  var justifyContent = props.justifyContent;
  var margin = props.margin;
  var marginBottom = props.marginBottom;
  var marginLeft = props.marginLeft;
  var marginRight = props.marginRight;
  var marginTop = props.marginTop;
  var maxHeight = props.maxHeight;
  var maxWidth = props.maxWidth;
  var minHeight = props.minHeight;
  var minWidth = props.minWidth;
  var order = props.order;
  var padding = props.padding;
  var paddingBottom = props.paddingBottom;
  var paddingLeft = props.paddingLeft;
  var paddingRight = props.paddingRight;
  var paddingTop = props.paddingTop;
  var style = props.style;
  var width = props.width;

  var other = _objectWithoutProperties(props, ['alignContent', 'alignItems', 'alignSelf', 'children', 'display', 'element', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'height', 'justifyContent', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'order', 'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'style', 'width']);

  var styles = prefixer.prefix((0, _lodash2.default)(_extends({
    alignContent: alignContent,
    alignItems: alignItems,
    alignSelf: alignSelf,
    display: display,
    flex: flex,
    flexBasis: flexBasis,
    flexDirection: flexDirection,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    flexWrap: flexWrap,
    height: height,
    justifyContent: justifyContent,
    margin: margin,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    maxHeight: maxHeight,
    maxWidth: maxWidth,
    minHeight: minHeight,
    minWidth: minWidth,
    order: order,
    padding: padding,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    width: width
  }, style), function (prop) {
    return prop !== undefined;
  }));

  return _react2.default.createElement(element, _extends({}, other, {
    style: styles
  }), children);
};

Flexbox.propTypes = {
  alignContent: _react.PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: _react.PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: _react.PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  children: _react.PropTypes.node,
  display: _react.PropTypes.oneOf(['flex', 'inline-flex']),
  element: _react.PropTypes.oneOf(['article', 'aside', 'div', 'figure', 'footer', 'header', 'main', 'nav', 'section']),
  flex: _react.PropTypes.string,
  flexBasis: _react.PropTypes.string,
  flexDirection: _react.PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: _react.PropTypes.number,
  flexShrink: _react.PropTypes.number,
  flexWrap: _react.PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  height: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  justifyContent: _react.PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  margin: _react.PropTypes.string,
  marginBottom: _react.PropTypes.string,
  marginLeft: _react.PropTypes.string,
  marginRight: _react.PropTypes.string,
  marginTop: _react.PropTypes.string,
  maxHeight: _react.PropTypes.string,
  maxWidth: _react.PropTypes.string,
  minHeight: _react.PropTypes.string,
  minWidth: _react.PropTypes.string,
  order: _react.PropTypes.number,
  padding: _react.PropTypes.string,
  paddingBottom: _react.PropTypes.string,
  paddingLeft: _react.PropTypes.string,
  paddingRight: _react.PropTypes.string,
  paddingTop: _react.PropTypes.string,
  style: _react.PropTypes.object,
  width: _react.PropTypes.string
};

Flexbox.defaultProps = {
  display: 'flex',
  element: 'div'
};

exports.default = Flexbox;