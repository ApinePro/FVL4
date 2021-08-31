'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopPlayer = function (_React$Component) {
  _inherits(TopPlayer, _React$Component);

  function TopPlayer(props) {
    _classCallCheck(this, TopPlayer);

    var _this = _possibleConstructorReturn(this, (TopPlayer.__proto__ || Object.getPrototypeOf(TopPlayer)).call(this, props));

    _this.state = {
      cards_remain: 5,
      player: "Cpine"
    };
    return _this;
  }

  _createClass(TopPlayer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement("img", { src: "./source/image/PlayerT.png" }),
        React.createElement(
          "p",
          null,
          "Player 1: ",
          this.state.player
        ),
        React.createElement(
          "p",
          null,
          "Remains Cards: ",
          this.state.cards_remain
        )
      );
    }
  }]);

  return TopPlayer;
}(React.Component);

var RightPlayer = function (_React$Component2) {
  _inherits(RightPlayer, _React$Component2);

  function RightPlayer(props) {
    _classCallCheck(this, RightPlayer);

    var _this2 = _possibleConstructorReturn(this, (RightPlayer.__proto__ || Object.getPrototypeOf(RightPlayer)).call(this, props));

    _this2.state = {
      cards_remain: 1,
      player: "Bpine"
    };
    return _this2;
  }

  _createClass(RightPlayer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement("img", { src: "./source/image/PlayerR.jpg" }),
        React.createElement(
          "p",
          null,
          "Player 2: ",
          this.state.player
        ),
        React.createElement(
          "p",
          null,
          "Remains Cards: ",
          this.state.cards_remain
        )
      );
    }
  }]);

  return RightPlayer;
}(React.Component);

var LeftPlayer = function (_React$Component3) {
  _inherits(LeftPlayer, _React$Component3);

  function LeftPlayer(props) {
    _classCallCheck(this, LeftPlayer);

    var _this3 = _possibleConstructorReturn(this, (LeftPlayer.__proto__ || Object.getPrototypeOf(LeftPlayer)).call(this, props));

    _this3.state = {
      cards_remain: 10,
      player: "Dpine"
    };
    return _this3;
  }

  _createClass(LeftPlayer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement("img", { src: "./source/image/PlayerL.jpg" }),
        React.createElement(
          "p",
          null,
          "Player 4: ",
          this.state.player
        ),
        React.createElement(
          "p",
          null,
          "Remains Cards: ",
          this.state.cards_remain
        )
      );
    }
  }]);

  return LeftPlayer;
}(React.Component);

var Con2 = function (_React$Component4) {
  _inherits(Con2, _React$Component4);

  function Con2(props) {
    _classCallCheck(this, Con2);

    var _this4 = _possibleConstructorReturn(this, (Con2.__proto__ || Object.getPrototypeOf(Con2)).call(this, props));

    _this4.state = {
      cards_remain: 10,
      player: "Dpine"
    };
    return _this4;
  }

  _createClass(Con2, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row", style: { border: '2px solid black' } },
        React.createElement(
          "div",
          { className: "col-md-12", style: { border: '2px solid red' } },
          React.createElement(
            "div",
            { className: "row", style: { border: '2px solid red' } },
            React.createElement(
              "p",
              null,
              "Player 4"
            ),
            React.createElement(
              "p",
              null,
              "Remains Cards"
            )
          )
        )
      );
    }
  }]);

  return Con2;
}(React.Component);

var domLeftPlayer = document.querySelector('#LeftPlayer');
ReactDOM.render(React.createElement(LeftPlayer, null), domLeftPlayer);
var domRightPlayer = document.querySelector('#RightPlayer');
ReactDOM.render(React.createElement(RightPlayer, null), domRightPlayer);
var domTopPlayer = document.querySelector('#TopPlayer');
ReactDOM.render(React.createElement(TopPlayer, null), domTopPlayer);
var domCon2 = document.querySelector('#Con2');
ReactDOM.render(React.createElement(Con2, null), domCon2);