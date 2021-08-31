'use strict';
/*
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';*/
/*
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderCard(num) {
    return (
      <Card
        value={this.state.squares[num]}
        onClick={() => this.handleClick(num)}
      />
    );
  }

  render() {

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
*/

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      value: -1,
    };
  }

  render() {

    return (
            <div className="row">
              <div class="col-md-5" id="menu">
              </div>
              <div class="col-md-2" id="menu">
               <img src="./source/image/PlayerT.png" style={{alignContent: "center"}}></img>
              </div>
              <div class="col-md-5" id="menu">
              </div>
            </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      value: -1,
    };
  }

  render() {
    if (this.state.selected) {
      return 'You selected this.';
    }

    return (
      <button type="button" id="final_button" className="btn btn-default" onClick={() => this.setState({ liked: true })}>
        <img src="./source/image/14.jpg"></img>
      </button> 
    );
  }
}

const domContainer = document.querySelector('#final_card');
ReactDOM.render(<Card />, domContainer);

const domBoard = document.querySelector('#BBB');
ReactDOM.render(<Board />, domBoard);