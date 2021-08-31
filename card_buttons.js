'use strict';

/*************************************************WebSocket Part*******************************************/
/**********************************************************************************************************/
/**********************************************************************************************************/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var client = new WebSocket('ws://127.0.0.1:3000');

var ConnectUnit = function (_React$Component) {
  _inherits(ConnectUnit, _React$Component);

  function ConnectUnit() {
    _classCallCheck(this, ConnectUnit);

    return _possibleConstructorReturn(this, (ConnectUnit.__proto__ || Object.getPrototypeOf(ConnectUnit)).apply(this, arguments));
  }

  _createClass(ConnectUnit, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      client.onopen = function () {
        console.log('WebSocket Client Connected');
      };
      client.onmessage = function (message) {
        console.log(message);
      };
    }
  }, {
    key: 'send',
    value: function send() {
      client.send('Hello!');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Connection Status: '
      );
    }
  }]);

  return ConnectUnit;
}(React.Component);

/**********************************************************************************************************/
/**********************************************************************************************************/

var OtherPlayer = function (_React$Component2) {
  _inherits(OtherPlayer, _React$Component2);

  function OtherPlayer(props) {
    _classCallCheck(this, OtherPlayer);

    var _this2 = _possibleConstructorReturn(this, (OtherPlayer.__proto__ || Object.getPrototypeOf(OtherPlayer)).call(this, props));

    _this2.state = {
      cards_remain: props.cards_remain,
      player: props.player,
      player_num: props.player_num
    };
    return _this2;
  }

  _createClass(OtherPlayer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement('img', { src: "./source/image/Player" + this.state.player_num + ".jpg", style: { border: "1px solid" } }),
        React.createElement(
          'p',
          { style: { fontFamily: "Helvetica" } },
          'Player ',
          this.state.player_num,
          ':   ',
          this.state.player
        ),
        React.createElement(
          'p',
          { style: { fontFamily: "Helvetica", fontSize: "90%" } },
          'Number of Cards Left: ',
          this.state.cards_remain
        )
      );
    }
  }]);

  return OtherPlayer;
}(React.Component);

function Card(props) {
  if (props.value < 0) {
    return '';
  } else {
    if (props.selected == false) {
      return React.createElement(
        'button',
        { type: 'button', className: 'btn btn-default', onClick: props.onClick },
        React.createElement('img', { src: "./source/image/" + props.value + ".jpg" })
      );
    } else if (props.selected == true) {
      return React.createElement(
        'button',
        { type: 'button', className: 'btn btn-default active', onClick: props.onClick },
        React.createElement('img', { src: "./source/image/" + props.value + ".jpg", style: { opacity: "0.3" } })
      );
    }
  }
}

function SendCardButton(props) {
  return React.createElement(
    'button',
    { type: 'button', style: { padding: "20px 200px", backgroundColor: "rgb(237, 233, 222)" }, onClick: props.onClick },
    'PLAY CARD'
  );
}

function TurnIndicator(props) {
  return React.createElement(
    'div',
    { style: { textAlign: "center" } },
    React.createElement(
      'b',
      null,
      'This is the turn of ',
      props.current_player
    )
  );
}

function DisplayCard(props) {
  if (props.value >= 0) {
    return React.createElement(
      'button',
      { type: 'button', className: 'btn btn-default' },
      React.createElement('img', { src: "./source/image/" + props.value + ".jpg" })
    );
  } else return "";
}

var Display = function (_React$Component3) {
  _inherits(Display, _React$Component3);

  function Display(props) {
    _classCallCheck(this, Display);

    var _this3 = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

    _this3.state = {
      onboard_cards: props.onboard_cards
    };
    return _this3;
  }

  _createClass(Display, [{
    key: 'renderDisplayCard',
    value: function renderDisplayCard(num) {
      return React.createElement(DisplayCard, {
        value: this.state.onboard_cards[num]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-8' },
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-8' },
              React.createElement(
                'div',
                { className: 'btn-group btn-group-justified', style: { maxWidth: "fit-content" } },
                this.renderDisplayCard(0),
                this.renderDisplayCard(1),
                this.renderDisplayCard(2),
                this.renderDisplayCard(3),
                this.renderDisplayCard(4)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-8' },
              React.createElement(
                'div',
                { className: 'btn-group btn-group-justified', style: { maxWidth: "fit-content" } },
                this.renderDisplayCard(5),
                this.renderDisplayCard(6),
                this.renderDisplayCard(7),
                this.renderDisplayCard(8),
                this.renderDisplayCard(9)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-8' },
              React.createElement(
                'div',
                { className: 'btn-group btn-group-justified', style: { maxWidth: "fit-content" } },
                this.renderDisplayCard(10),
                this.renderDisplayCard(11),
                this.renderDisplayCard(12),
                this.renderDisplayCard(13),
                this.renderDisplayCard(14)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-8' },
              React.createElement(
                'div',
                { className: 'btn-group btn-group-justified', style: { maxWidth: "fit-content" } },
                this.renderDisplayCard(15)
              )
            )
          )
        )
      );
    }
  }]);

  return Display;
}(React.Component);

var CardBoard = function (_React$Component4) {
  _inherits(CardBoard, _React$Component4);

  function CardBoard(props) {
    _classCallCheck(this, CardBoard);

    var _this4 = _possibleConstructorReturn(this, (CardBoard.__proto__ || Object.getPrototypeOf(CardBoard)).call(this, props));

    _this4.state = {
      cards: [12, 12, 12, 20, 50, 51, 1, 1, 11, 11, -1, -1, -1, -1, -1, -1],
      cards_selected: Array(16).fill(false),
      player: "Apine",
      sendFunc: props.sendFunc
    };
    return _this4;
  }

  _createClass(CardBoard, [{
    key: 'handleCardClick',
    value: function handleCardClick(num) {
      var cards_selected = this.state.cards_selected.slice();
      cards_selected[num] = !cards_selected[num];
      this.setState({
        cards_selected: cards_selected
      });
    }
  }, {
    key: 'handleSendClick',
    value: function handleSendClick() {
      /*Send cards message to host */
      var cards = Array(16).fill(-1);
      var new_cards = Array(16).fill(-1);
      var new_cards_selected = Array(16).fill(false);
      var count = 0;
      var count_new = 0;
      for (var i = 0; i < this.state.cards_selected.length; i++) {
        if (this.state.cards_selected[i]) {
          cards[count++] = this.state.cards[i];
        } else new_cards[count_new++] = this.state.cards[i];
      }
      this.setState({
        cards: new_cards,
        cards_selected: new_cards_selected
      });
      this.state.sendFunc(cards);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row', style: { border: "1px solid black" } },
        React.createElement(
          'div',
          { className: 'col-md-12', style: { border: "1px solid black" } },
          React.createElement(
            'div',
            { className: 'row' },
            this.renderTurnIndicator(),
            React.createElement(
              'p',
              { style: { textAlign: "center" } },
              React.createElement(
                'b',
                null,
                'Select Your Cards:'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-12' },
              React.createElement(
                'div',
                { className: 'btn-group btn-group-justified', style: { maxWidth: "fit-content" } },
                this.renderCard(0),
                this.renderCard(1),
                this.renderCard(2),
                this.renderCard(3),
                this.renderCard(4),
                this.renderCard(5),
                this.renderCard(6),
                this.renderCard(7)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-12' },
              React.createElement(
                'div',
                { className: 'btn-group btn-group-justified', style: { maxWidth: "fit-content" } },
                this.renderCard(8),
                this.renderCard(9),
                this.renderCard(10),
                this.renderCard(11),
                this.renderCard(12),
                this.renderCard(13),
                this.renderCard(14),
                this.renderCard(15)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row', style: { border: "1px solid black" } },
            React.createElement(
              'div',
              { className: 'col-md-12', style: { border: "1px solid black", textAlign: "center" } },
              this.renderSendButton()
            )
          )
        )
      );
    }
  }, {
    key: 'renderCard',
    value: function renderCard(num) {
      var _this5 = this;

      return React.createElement(Card, {
        value: this.state.cards[num],
        selected: this.state.cards_selected[num],
        onClick: function onClick() {
          return _this5.handleCardClick(num);
        }
      });
    }
  }, {
    key: 'renderSendButton',
    value: function renderSendButton() {
      var _this6 = this;

      return React.createElement(SendCardButton, {
        onClick: function onClick() {
          return _this6.handleSendClick();
        }
      });
    }
  }, {
    key: 'renderTurnIndicator',
    value: function renderTurnIndicator() {
      return React.createElement(TurnIndicator, {
        current_player: this.state.player
      });
    }
  }]);

  return CardBoard;
}(React.Component);

var PlayContainer = function (_React$Component5) {
  _inherits(PlayContainer, _React$Component5);

  function PlayContainer(props) {
    _classCallCheck(this, PlayContainer);

    var _this7 = _possibleConstructorReturn(this, (PlayContainer.__proto__ || Object.getPrototypeOf(PlayContainer)).call(this, props));

    _this7.state = {
      onboard_cards: [12, 12, 12, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
      cards_selected: Array(16).fill(false),
      player_name: ['Apine', 'Bpine', 'Cpine', 'Dpine']
    };
    return _this7;
  }

  _createClass(PlayContainer, [{
    key: 'renderCardBoard',
    value: function renderCardBoard() {
      return React.createElement(CardBoard, {
        sendFunc: this.sendFunc.bind(this)
      });
    }
  }, {
    key: 'renderOtherPlayer',
    value: function renderOtherPlayer(num) {
      return React.createElement(OtherPlayer, {
        player: this.state.player_name[num - 1],
        player_num: num,
        cards_remain: 5
      });
    }
  }, {
    key: 'renderDisplay',
    value: function renderDisplay() {
      return React.createElement(Display, {
        onboard_cards: this.state.onboard_cards
      });
    }
  }, {
    key: 'AddConnectUnit',
    value: function AddConnectUnit() {
      return React.createElement(ConnectUnit, null);
    }
  }, {
    key: 'sendFunc',
    value: function sendFunc(cards) {
      var new_onboard_cards = cards.slice();
      this.setState({
        onboard_cards: new_onboard_cards
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row', style: { border: '1px solid black' } },
          React.createElement(
            'div',
            { className: 'col-md-4', style: { border: '1px solid black' } },
            this.AddConnectUnit()
          ),
          React.createElement(
            'div',
            { className: 'col-md-8', style: { border: '1px solid black', textAlign: "right" } },
            React.createElement(
              'button',
              null,
              'Exit Game'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row', style: { border: '1px solid black' } },
          React.createElement('div', { className: 'col-md-5', style: { border: '1px solid black' } }),
          React.createElement(
            'div',
            { className: 'col-md-2', style: { border: '1px solid black', background: "rgb(236, 228, 218)" } },
            this.renderOtherPlayer(3)
          ),
          React.createElement('div', { className: 'col-md-5', style: { border: '1px solid black' } })
        ),
        React.createElement(
          'div',
          { className: 'row', style: { border: '1px solid black' } },
          React.createElement(
            'div',
            { className: 'col-md-2', style: { border: '1px solid black', background: "rgb(236, 228, 218)" } },
            this.renderOtherPlayer(2)
          ),
          React.createElement(
            'div',
            { className: 'col-md-8', style: { border: '1px solid black' } },
            this.renderDisplay()
          ),
          React.createElement(
            'div',
            { className: 'col-md-2', style: { border: '1px solid black', background: "rgb(236, 228, 218)" } },
            this.renderOtherPlayer(4)
          )
        ),
        this.renderCardBoard()
      );
    }
  }]);

  return PlayContainer;
}(React.Component);

var domPlayContainer = document.querySelector('#PlayContainer');
ReactDOM.render(React.createElement(PlayContainer, null), domPlayContainer);