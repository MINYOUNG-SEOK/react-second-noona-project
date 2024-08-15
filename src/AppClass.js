import React, { Component } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "/img/rock.jpeg",
  },
  scissors: {
    name: "Scissors",
    img: "/img/scissors.jpeg",
  },
  paper: {
    name: "Paper",
    img: "/img/paper.jpeg",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      winCount: 0,
      loseCount: 0,
    };
  }

  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });
    const computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });
    const gameResult = this.judgement(choice[userChoice], computerChoice);
    this.setState({ result: gameResult });

    if (gameResult === "win") {
      this.setState((prevState) => ({ winCount: prevState.winCount + 1 }));
    } else if (gameResult === "lose") {
      this.setState((prevState) => ({ loseCount: prevState.loseCount + 1 }));
    }
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  resetGame = () => {
    this.setState({
      winCount: 0,
      loseCount: 0,
      userSelect: null,
      computerSelect: null,
      result: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="main">
          <Box
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <Box
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
           
        </div>
        <div className="main">
          <button onClick={() => this.play("rock")}>
            <img src="/img/rock.jpeg" alt="rock" />
          </button>
          <button onClick={() => this.play("scissors")}>
            <img src="/img/scissors.jpeg" alt="scissors" />
          </button>
          <button onClick={() => this.play("paper")}>
            <img src="/img/paper.jpeg" alt="paper" />
          </button>
        </div>
        <div className="scoreboard">
          <div>
            {this.state.winCount} : {this.state.loseCount}
          </div>
        </div>
        <button className="resetBtn" onClick={this.resetGame}>
          Reset
        </button>
         
      </div>
    );
  }
}
