'use strict';

class TopPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards_remain: 5,
      player: "Cpine",
    };
  }

  render() {
    return (
      <div className="row">
        <img src="./source/image/PlayerT.png"></img>
        <p>Player 1: {this.state.player}</p>
        <p>Remains Cards: {this.state.cards_remain}</p>
      </div>
    );
  }
}

class RightPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards_remain: 1,
      player: "Bpine",
    };
  }

  render() {
    return (
      <div className="row">
        <img src="./source/image/PlayerR.jpg"></img>
        <p>Player 2: {this.state.player}</p>
        <p>Remains Cards: {this.state.cards_remain}</p>
      </div>
    );
  }
}

class LeftPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards_remain: 10,
      player: "Dpine",
    };
  }

  render() {
    return (
      <div className="row">
        <img src="./source/image/PlayerL.jpg"></img>
        <p>Player 4: {this.state.player}</p>
        <p>Remains Cards: {this.state.cards_remain}</p>
      </div>
    );
  }
}

class Con2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards_remain: 10,
      player: "Dpine",
    };
  }

  render() {
    return (
      <div className="row" style={{border: '2px solid black'}}>
        <div className="col-md-12" style={{border: '2px solid red'}}>
          <div className="row" style={{border: '2px solid red'}}>
            <p>Player 4</p>
            <p>Remains Cards</p>
          </div>
        </div>
      </div>
    );
  }
}



const domLeftPlayer = document.querySelector('#LeftPlayer');
ReactDOM.render(<LeftPlayer />, domLeftPlayer);
const domRightPlayer = document.querySelector('#RightPlayer');
ReactDOM.render(<RightPlayer />, domRightPlayer);
const domTopPlayer = document.querySelector('#TopPlayer');
ReactDOM.render(<TopPlayer />, domTopPlayer);
const domCon2 = document.querySelector('#Con2');
ReactDOM.render(<Con2 />, domCon2);