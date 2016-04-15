'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return prefixer.prefix({
        display: this.props.inline ? 'inline-flex' : 'flex',
        alignContent: this.props.alignContent,
        alignItems: this.props.alignItems,
        flexDirection: this.props.flexDirection,
        justifyContent: this.props.justifyContent,
        flexWrap: this.props.flexWrap
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.styles() },
        this.props.children
      );
    }
  }]);

  return Flexbox;
}(_react2.default.Component);

Flexbox.propTypes = {
  alignContent: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
  alignItems: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  flexDirection: _react.PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justifyContent: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  flexWrap: _react.PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  inline: _react.PropTypes.bool,
  children: _react2.default.PropTypes.node
};

exports.default = Flexbox;