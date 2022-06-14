import { useState } from "react";
import './App.css';

const defaultGuessList = [
  ["R", "E", "A", "C", "T"],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
]

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Delete", "Z", "X", "C", "V", "B", "N", "M", "Enter"];
const keyBoardArr = [keys1, keys2, keys3]


function App() {
  const [todaysWord, setTodaysWord] = useState("");
  const [wordleGuessList, setWordleGuessList] = useState([...defaultGuessList]);
  const [keyValue, setKeyValue] = useState();


  return (
    <div className="App">
      <header className="App-header">
        <WordleHeader />
        <WordleGrid
          wordleGuessList={wordleGuessList}
        />
        <KeyBoardComponent />
      </header>
    </div>
  );
}


// matrix components
const WordleHeader = () => {
  return (
    <h1 className="wordle-header">
      Wordle Clone
    </h1>
  )
}

const WordleGrid = (props) => {
  // const { wordleGuessList } = props;
  return (
    <div className="wordle-grid">
      {props.wordleGuessList.map((wordleGuess) => {
        return (
          <WordleGridRow wordleGuess={wordleGuess} />
        )
      })}
    </div>
  )
}

const WordleGridRow = (props) => {
  return (
    <div className="wordle-grid-row">
      {props.wordleGuess.map((wordleLetter) => {
        return (
          <WordleGridLetter wordleLetter={wordleLetter} isCorrect={wordleLetter === "A" || wordleLetter === "E"} />
        )
      })}
    </div>
  )
}

const WordleGridLetter = (props) => {
  return (
    <div className={`wordle-grid-letter wordle-grid-letter-${props.isCorrect}`}>
      {props.wordleLetter}
    </div>
  )
}



// keyboard components
const KeyBoardComponent = () => {
  return (
    <div className="keyboard-grid">

      {keyBoardArr.map((row, index) => {
        return <KeyRowComponent key={index} keyRow={row}></KeyRowComponent>
      })}
    </div>
  )
}

const KeyRowComponent = (props) => {
  return (
    <div className="keyboard-row">
      {props.keyRow.map((letter, index) => {
        return <KeyComponent key={index} letter={letter}></KeyComponent>
      })}
    </div>
  )
}

const KeyComponent = (props) => {
  return <div className="keyboard-key">{props.letter}</div>
};







export default App;
