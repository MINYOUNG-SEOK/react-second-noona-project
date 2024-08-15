// import { useState } from "react";
// import "./App.css";
// import Box from "./component/Box";

// // 1. 박스 2개 (타이틀, 사진, 결과)
// // 2. 가위 바위 보 버튼이 있다
// // 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// // 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// // 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// // 6. 승패 결과에 따라 테두리 색이 변한다 (승-초록, 패-빨강, 비기면-검정)

// const choice = {
//   rock: {
//     name: "Rock",
//     img: "/img/rock.jpeg",
//   },
//   scissors: {
//     name: "Scissors",
//     img: "/img/scissors.jpeg",
//   },
//   paper: {
//     name: "Paper",
//     img: "/img/paper.jpeg",
//   },
// };

// function App() {
//   const [userSelect, setUserSelect] = useState(null);
//   const [computerSelect, setComputerSelect] = useState(null);
//   const [result, setResult] = useState("");
//   const [winCount, setWinCount] = useState(0);
//   const [loseCount, setLoseCount] = useState(0);

//   const play = (userChoice) => {
//     setUserSelect(choice[userChoice]);
//     let computerChoice = randomChoice();
//     setComputerSelect(computerChoice);
//     const gameResult = judgement(choice[userChoice], computerChoice);
//     setResult(gameResult); // 게임 결과 보여주기

//     if (gameResult === "win") {
//       setWinCount(winCount + 1);
//     } else if (gameResult === "lose") {
//       setLoseCount(loseCount + 1);
//     }
//   };

//   const randomChoice = () => {
//     let itemArray = Object.keys(choice); // 객체에 키 값만 뽑아서 어레이로 만들어주는 함수
//     console.log("item array", itemArray);
//     let randomItem = Math.floor(Math.random() * itemArray.length);
//     let final = itemArray[randomItem];
//     return choice[final];
//   };

//   const judgement = (user, computer) => {
//     if (user.name === computer.name) {
//       return "tie";
//     } else if (user.name === "Rock")
//       return computer.name === "Scissors" ? "win" : "lose";
//     else if (user.name === "Scissors")
//       return computer.name === "Paper" ? "win" : "lose";
//     else if (user.name === "Paper")
//       return computer.name === "Rock" ? "win" : "lose";
//   }; // 점수 초기화 하기

//   const resetGame = () => {
//     setWinCount(0);
//     setLoseCount(0);
//     setUserSelect(null);
//     setComputerSelect(null);
//     setResult("");
//   };

//   return (
//     <div className="container">
//       <div className="main">
//                 <Box title="You" item={userSelect} result={result} />
//                 <Box title="Computer" item={computerSelect} result={result} />
//       </div>
//       <div className="main">
//         <button onClick={() => play("rock")}>
//           <img src="/img/rock.jpeg" alt="rock" />
//         </button>
//         <button onClick={() => play("scissors")}>
//           <img src="/img/scissors.jpeg" alt="scissors" />
//         </button>
//         <button onClick={() => play("paper")}>
//           <img src="/img/paper.jpeg" alt="paper" />
//         </button>
//       </div>
//       <div className="scoreboard">
//         <div>
//           {winCount} : {loseCount}
//         </div>
//       </div>
//       <button className="resetBtn" onClick={resetGame}>
//         Reset
//       </button>
//
//     </div>
//   );
// }

// export default App;
