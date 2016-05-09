'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefixer = new _inlineStylePrefixer2.default();

var Flexbox = function (_React$Component) {
  _inherits(Flexbox, _React$Component);

  function Flexbox() {
    _classCallCheck(this, Flexbox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Flexbox).apply(this, arguments));
  }

  _createClass(Flexbox, [{
    key: 'styles',
    value: function styles() {
      var _props = this.props;
      var alignContent = _props.alignContent;
      var alignItems = _props.alignItems;
      var flexDirection = _props.flexDirection;
      var flexWrap = _props.flexWrap;
      var height = _props.height;
      var justifyContent = _props.justifyContent;
      var margin = _props.margin;
      var maxHeight = _props.maxHeight;
      var minHeight = _props.minHeight;
      var maxWidth = _props.maxWidth;
      var minWidth = _props.minWidth;
      var padding = _props.padding;
      var width = _props.width;
      var inline = _props.inline;

      var props = _objectWithoutProperties(_props, ['alignContent', 'alignItems', 'flexDirection', 'flexWrap', 'height', 'justifyContent', 'margin', 'maxHeight', 'minHeight', 'maxWidth', 'minWidth', 'padding', 'width', 'inline']);

      var display = this.props.inline ? 'inline-flex' : 'flex';

      return prefixer.prefix({
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
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({}, props, { style: this.styles() }),
        this.props.children
      );
    }
  }]);

  return Flexbox;
}(_react2.default.Component);

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
  width: _react.PropTypes.string
};

exports.default = Flexbox;