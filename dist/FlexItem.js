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

var FlexItem = function FlexItem(props) {
  var style = props.style;
  var alignSelf = props.alignSelf;
  var flex = props.flex;
  var flexBasis = props.flexBasis;
  var flexGrow = props.flexGrow;
  var flexShrink = props.flexShrink;
  var height = props.height;
  var margin = props.margin;
  var maxHeight = props.maxHeight;
  var minHeight = props.minHeight;
  var maxWidth = props.maxWidth;
  var minWidth = props.minWidth;
  var order = props.order;
  var padding = props.padding;
  var width = props.width;

  var other = _objectWithoutProperties(props, ['style', 'alignSelf', 'flex', 'flexBasis', 'flexGrow', 'flexShrink', 'height', 'margin', 'maxHeight', 'minHeight', 'maxWidth', 'minWidth', 'order', 'padding', 'width']);

  var styles = prefixer.prefix(_extends({}, style, {
    alignSelf: alignSelf,
    flex: flex,
    flexBasis: flexBasis,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    height: height,
    margin: margin,
    maxHeight: maxHeight,
    minHeight: minHeight,
    maxWidth: maxWidth,
    minWidth: minWidth,
    order: order,
    padding: padding,
    width: width
  }));

  return _react2.default.createElement(
    'div',
    _extends({}, other, { style: styles }),
    undefined.props.children
  );
};

FlexItem.propTypes = {
  alignSelf: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  children: _react2.default.PropTypes.node,
  flex: _react.PropTypes.string,
  flexBasis: _react.PropTypes.string,
  flexGrow: _react.PropTypes.number,
  flexShrink: _react.PropTypes.number,
  height: _react.PropTypes.string,
  margin: _react.PropTypes.string,
  maxHeight: _react.PropTypes.string,
  minHeight: _react.PropTypes.string,
  maxWidth: _react.PropTypes.string,
  minWidth: _react.PropTypes.string,
  order: _react.PropTypes.number,
  padding: _react.PropTypes.string,
  style: _react.PropTypes.object,
  width: _react.PropTypes.string
};

exports.default = FlexItem;