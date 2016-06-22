'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var prefixer = new _inlineStylePrefixer2.default();

var Flexbox = function Flexbox(props) {
  var alignContent = props.alignContent;
  var alignItems = props.alignItems;
  var alignSelf = props.alignSelf;
  var flex = props.flex;
  var flexBasis = props.flexBasis;
  var flexDirection = props.flexDirection;
  var flexGrow = props.flexGrow;
  var flexShrink = props.flexShrink;
  var flexWrap = props.flexWrap;
  var height = props.height;
  var inline = props.inline;
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

  var other = _objectWithoutProperties(props, ['alignContent', 'alignItems', 'alignSelf', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'height', 'inline', 'justifyContent', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'order', 'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'style', 'width']);

  var display = inline ? 'inline-flex' : 'flex';

  var styles = prefixer.prefix(_extends({
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
  }, style));

  return _react2.default.createElement(
    'div',
    _extends({}, other, { style: styles }),
    props.children
  );
};

Flexbox.propTypes = {
  alignContent: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
  alignItems: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  children: _react2.default.PropTypes.node,
  flex: _react.PropTypes.string,
  flexBasis: _react.PropTypes.string,
  flexDirection: _react.PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexGrow: _react.PropTypes.number,
  flexShrink: _react.PropTypes.number,
  alignSelf: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  flexWrap: _react.PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  height: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  justifyContent: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
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

exports.default = Flexbox;