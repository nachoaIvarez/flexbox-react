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
  var style = props.style;
  var alignContent = props.alignContent;
  var alignItems = props.alignItems;
  var flexDirection = props.flexDirection;
  var flexWrap = props.flexWrap;
  var height = props.height;
  var justifyContent = props.justifyContent;
  var margin = props.margin;
  var maxHeight = props.maxHeight;
  var minHeight = props.minHeight;
  var maxWidth = props.maxWidth;
  var minWidth = props.minWidth;
  var padding = props.padding;
  var width = props.width;
  var inline = props.inline;

  var other = _objectWithoutProperties(props, ['style', 'alignContent', 'alignItems', 'flexDirection', 'flexWrap', 'height', 'justifyContent', 'margin', 'maxHeight', 'minHeight', 'maxWidth', 'minWidth', 'padding', 'width', 'inline']);

  var display = inline ? 'inline-flex' : 'flex';

  var styles = prefixer.prefix(_extends({}, style, {
    alignContent: alignContent,
    alignItems: alignItems,
    display: display,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    height: height,
    justifyContent: justifyContent,
    margin: margin,
    maxHeight: maxHeight,
    minHeight: minHeight,
    maxWidth: maxWidth,
    minWidth: minWidth,
    padding: padding,
    width: width
  }));

  return _react2.default.createElement(
    'div',
    _extends({}, other, { style: styles }),
    undefined.props.children
  );
};

Flexbox.propTypes = {
  alignContent: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
  alignItems: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  children: _react2.default.PropTypes.node,
  flexDirection: _react.PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexWrap: _react.PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  height: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  justifyContent: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  margin: _react.PropTypes.string,
  maxHeight: _react.PropTypes.string,
  minHeight: _react.PropTypes.string,
  maxWidth: _react.PropTypes.string,
  minWidth: _react.PropTypes.string,
  padding: _react.PropTypes.string,
  style: _react.PropTypes.object,
  width: _react.PropTypes.string
};

exports.default = Flexbox;