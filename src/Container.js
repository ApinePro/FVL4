'use strict';

/*************************************************WebSocket Part*******************************************/
/**********************************************************************************************************/
/**********************************************************************************************************/

const client = new WebSocket('ws://127.0.0.1:3000');

class ConnectUnit extends React.Component {
  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }
  
  send() {
    client.send('Hello!');
  }

  render() {
    return (
      <div>
        Connection Status: {}
      </div>
    );
  }
}

/**********************************************************************************************************/
/**********************************************************************************************************/




class OtherPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards_remain: props.cards_remain,
      player: props.player,
      player_num: props.player_num,
    };
  }

  render() {
    return (
      <div className="row">
        <img src={"./source/image/Player" + this.state.player_num + ".jpg"} style={{border: "1px solid"}}></img>
        <p style={{fontFamily: "verdana"}}>Player {this.state.player_num}:   {this.state.player}</p>
        <p style={{fontFamily: "verdana", fontSize: "80%"}}>Number of Cards Left: {this.state.cards_remain}</p>
      </div>
    );
  }
}

function Card(props) {
  if (props.value<0) {
    return '';
  }
  else{
    if(props.selected==false) {
      return (
      <button type="button" className="btn btn-default" onClick={props.onClick}>
        <img src={"./source/image/" + props.value + ".jpg"}></img>
      </button>
      );
    }
    else if(props.selected==true){
      return (
        <button type="button" className="btn btn-default active" onClick={props.onClick}>
          <img src={"./source/image/" + props.value + ".jpg"} style={{opacity: "0.3"}}></img>
        </button>
        );
    }
  }
}

function SendCardButton(props) {
  return (
    <button type="button" style={{padding: "20px 200px", backgroundColor: "rgb(237, 233, 222)"}} onClick={props.onClick}>
        PLAY CARD
    </button>
  );
}

function TurnIndicator(props) {
  return (
    <div style={{textAlign: "center"}}><b>This is the turn of {props.current_player}</b></div>
  );
}

function DisplayCard(props) {
  if(props.value>=0){
    return (
      <button type="button" className="btn btn-default">
        <img src={"./source/image/" + props.value + ".jpg"}></img>
      </button>
      );
    }
  else return '';
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onboard_cards: props.onboard_cards,
    };
  }

  renderDisplayCard(num) {
    console.log("state in Display");
    console.log(this.state.onboard_cards);
    return (
      <DisplayCard
      value={this.state.onboard_cards[num]}
      />
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-8">
              <div className="btn-group btn-group-justified" style={{maxWidth: "fit-content"}}>
                {this.renderDisplayCard(0)}
                {this.renderDisplayCard(1)}
                {this.renderDisplayCard(2)}
                {this.renderDisplayCard(3)}
                {this.renderDisplayCard(4)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="btn-group btn-group-justified" style={{maxWidth: "fit-content"}}>
              {this.renderDisplayCard(5)}
              {this.renderDisplayCard(6)}
              {this.renderDisplayCard(7)}
              {this.renderDisplayCard(8)}
              {this.renderDisplayCard(9)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="btn-group btn-group-justified" style={{maxWidth: "fit-content"}}>
              {this.renderDisplayCard(10)}
              {this.renderDisplayCard(11)}
              {this.renderDisplayCard(12)}
              {this.renderDisplayCard(13)}
              {this.renderDisplayCard(14)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="btn-group btn-group-justified" style={{maxWidth: "fit-content"}}>
                {this.renderDisplayCard(15)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CardBoard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cards: [12, 12, 12, 20, 50, 51, 1, 1, 11, 11, -1, -1, -1, -1, -1, -1],
      cards_selected: Array(16).fill(false),
      player: props.player,
    };
  }

  handleCardClick(num) {
    const cards_selected = this.state.cards_selected.slice();
    cards_selected[num] = !cards_selected[num]
    this.setState({
      cards_selected: cards_selected
    });
  }

  handleSendClick() {
    /*Send cards message to host */
    const cards = Array(16).fill(-1);
    const new_cards = Array(16).fill(-1);
    const new_cards_selected = Array(16).fill(false);
    var count = 0;
    var count_new = 0;
    for(var i=0;i<this.state.cards_selected.length;i++){
      if(this.state.cards_selected[i]){
        cards[count++] = this.state.cards[i];
      }
      else new_cards[count_new++] = this.state.cards[i];
    }
    this.setState({
      cards: new_cards,
      cards_selected: new_cards_selected,
    });
    this.props.sendFunc(cards);
  }

  render() {
    return (
      <div className="row" style={{border: "1px solid black"}}>
        <div className="col-md-12" style={{border: "1px solid black"}}>
          <div className="row">
            {this.renderTurnIndicator()}
            <p style={{textAlign: "center"}}><b>Select Your Cards:</b></p>
          </div>
          <div className="row">
            <div className="col-md-12">  
              <div className="btn-group btn-group-justified" style={{maxWidth: "fit-content"}}>
                {this.renderCard(0)}
                {this.renderCard(1)}
                {this.renderCard(2)}
                {this.renderCard(3)}
                {this.renderCard(4)}
                {this.renderCard(5)}
                {this.renderCard(6)}
                {this.renderCard(7)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">  
              <div className="btn-group btn-group-justified" style={{maxWidth: "fit-content"}}>
                {this.renderCard(8)}
                {this.renderCard(9)}
                {this.renderCard(10)}
                {this.renderCard(11)}
                {this.renderCard(12)}
                {this.renderCard(13)}
                {this.renderCard(14)}
                {this.renderCard(15)}
              </div>
            </div>
          </div>
          <div className="row" style={{border: "1px solid black"}}>
            <div className="col-md-12" style={{border: "1px solid black", textAlign: "center"}}>  
              {this.renderSendButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderCard(num) {
    return (
      <Card
        value={this.state.cards[num]}
        selected={this.state.cards_selected[num]}
        onClick={() => this.handleCardClick(num)}
      />
    );
  }

  renderSendButton() {
    return (
      <SendCardButton
        onClick={() => this.handleSendClick()}
      />
    );
  }

  renderTurnIndicator() {
    return (
      <TurnIndicator
        current_player={this.state.player}
      />
    );
  }
}

class PlayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendFunc = this.sendFunc.bind(this);
    this.state = {
      onboard_cards: [12, 12, 12, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
      cards_selected: Array(16).fill(false),
      player_name: ['Apine', 'Bpine', 'Cpine', 'Dpine'],
      player_this_turn: 1,
    };
  }

  renderCardBoard() {
    return (
      <CardBoard
        sendFunc={this.handleSendFunc}
        player={this.state.player_name[this.state.player_this_turn-1]}
      />
    );
  }

  renderOtherPlayer(num) {
    return (
      <OtherPlayer
      player={this.state.player_name[num-1]}
      player_num={num}
      cards_remain={5}
      />
    );
  }

  renderDisplay() {
    console.log("state in Container");
    console.log(this.state.onboard_cards);
    return (
      <Display
      onboard_cards={this.state.onboard_cards}
      />
    );
  }

  AddConnectUnit() {
    return (
      <ConnectUnit/>
    );
  }
  
  sendFunc(cards) {
    const new_onboard_cards = cards.slice();
    this.setState({
      onboard_cards: new_onboard_cards
      },
      () => {console.log("state in sendFunc");console.log(this.state.onboard_cards);this.render();}
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{border: '1px solid black'}}>
          <div className="col-md-4" style={{border: '1px solid black'}}>
            {this.AddConnectUnit()}
          </div>
          <div className="col-md-8" style={{border: '1px solid black', textAlign: "right"}}>
            <button>Exit Game</button>
          </div>
        </div>
        <div className="row" style={{border: '1px solid black'}}>
            <div className="col-md-5" style={{border: '1px solid black'}}>
            </div>
            <div className="col-md-2" style={{border: '1px solid black', background: "rgb(236, 228, 218)"}}>
              {this.renderOtherPlayer(3)}
            </div>
            <div className="col-md-5" style={{border: '1px solid black'}}>
            </div>
        </div>
        <div className="row" style={{border: '1px solid black'}}>
            <div className="col-md-2" style={{border: '1px solid black', background: "rgb(236, 228, 218)"}}>
              {this.renderOtherPlayer(2)}
            </div>
            <div className="col-md-8" style={{border: '1px solid black'}}>
                {this.renderDisplay()}
            </div>
            <div className="col-md-2" style={{border: '1px solid black', background: "rgb(236, 228, 218)"}}>
              {this.renderOtherPlayer(4)}
            </div>
        </div>
        {this.renderCardBoard()}
      </div>
    );
  }
}

const domPlayContainer = document.querySelector('#PlayContainer');
ReactDOM.render(<PlayContainer />, domPlayContainer);



