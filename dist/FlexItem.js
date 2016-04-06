'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _postcssJs = require('postcss-js');

var _postcssJs2 = _interopRequireDefault(_postcssJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefixer = _postcssJs2.default.sync([_autoprefixer2.default]);

var FlexItem = function (_React$Component) {
  _inherits(FlexItem, _React$Component);

  function FlexItem() {
    _classCallCheck(this, FlexItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlexItem).apply(this, arguments));
  }

  _createClass(FlexItem, [{
    key: 'styles',
    value: function styles() {
      return prefixer({
        order: this.props.order,
        flexGrow: this.props.flexGrow,
        flexShrink: this.props.flexShrink,
        flexBasis: this.props.flexBasis,
        flex: this.props.flex
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

  return FlexItem;
}(_react2.default.Component);

FlexItem.propTypes = {
  order: _react.PropTypes.number,
  flexGrow: _react.PropTypes.number,
  flexShrink: _react.PropTypes.number,
  flexBasis: _react.PropTypes.string,
  flex: _react.PropTypes.string,
  alignSelf: _react.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  children: _react2.default.PropTypes.node
};

exports.default = FlexItem;