import { useState, useRef, useEffect, useCallback, useReducer } from "react";
import { Hangman } from "./components/Hangman";
import { Nav } from "./components/Nav";
import "./App.css";

function App() {
  const [word, setWord] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [gameState, setGameState] = useState<string>("ongoing");
  const [count, setCount] = useState<number>(0);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [inputedChar, setInputedChar] = useState<string[]>([]);
  const [encryptedWord, setEncryptedWord] = useState<string[]>([]);
  const [encryptedWordCopy, setEncryptedWordCopy] = useState<string[]>([]);
  const message = useRef<string>("");
  const level = useRef<number>(1);

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );

  const fetchWords = useCallback(async () => {
    const response = await (
      await fetch("https://api.api-ninjas.com/v1/randomword?noun", {
        method: "GET",
        headers: {
          "X-Api-Key": "Sk2GSQKcKvc62KGl06WFRA==GKbiCPsun8AwHYIO",
        },
      })
    ).json();

    setWord(response.word.toLowerCase());
    setEncryptedWord(response.word.toLowerCase().split(""));
    setEncryptedWordCopy(new Array(response.word.length).fill("_"));
  }, []);

  const nextLevel = useCallback(async () => {
    if (level.current >= 10) {
      setGameState("won");
      return;
    }
    message.current = "Correct!";
    await fetchWords();
    setErrorCount(0);
    setCount(0);
    level.current++;
    setInputedChar([]);
    message.current = "";
  }, []);

  const resetGame = useCallback(async () => {
    await fetchWords();
    setInput("");
    setCount(0);
    level.current = 1;
    setErrorCount(0);
    setInputedChar([]);
    if (message.current) {
      message.current = "You Lost!";
    }
    setGameState("ongoing");
  }, []);

  const handleChange = (event: any) => {
    event.preventDefault();

    const value = event.target.value;

    if (value === "" || /^[a-zA-Z]$/.test(value)) {
      setInput(value);
      setErrorMessage("");
    }

    if (inputedChar.includes(value)) {
      setErrorMessage("You have already tried this character");
    }
  };

  const checkWord = async () => {
    if (!encryptedWord.includes(input) && inputedChar.includes(input)) {
      setInput("");
    } else if (!encryptedWord.includes(input) && !inputedChar.includes(input)) {
      setErrorCount((errorCount) => errorCount + 1);
      setInput("");
      setInputedChar([...inputedChar, input]);
    }

    if (errorCount === 5) {
      setGameState("lost");
      return;
    }

    for (const [index, str] of encryptedWord.entries()) {
      let indexes = [];
      if (str.charAt(0) === input && !inputedChar.includes(input)) {
        setCount((count) => count + 1);
        indexes.push(index);
        indexes.forEach((idx) => (encryptedWordCopy[idx] = input));
        setInputedChar([...inputedChar, input]);
      }
    }

    setInput("");

    if (count === word.length - 1) {
      await nextLevel();
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await fetchWords();
    };

    fetch();
  }, []);

  console.log(word, level);

  return (
    <>
      <Nav />
      <div className="App">
        {gameState === "ongoing" && (
          <>
            <div className="level">
              <h1> Level: {level.current}</h1>
            </div>

            <div className="hangman">
              <Hangman mistakes={errorCount}></Hangman>
            </div>

            <h1 className="underscores">
              {encryptedWordCopy.map((char, idx) => (
                <span key={idx}> {char} </span>
              ))}
            </h1>

            <div className="inputField">
              <div className="messageInput">
                <input
                  type="text"
                  value={input}
                  onChange={handleChange}
                  className="input"
                />
                {errorMessage !== "" ? (
                  <span style={{ color: "white", fontSize: "8px" }}>
                    {errorMessage}
                  </span>
                ) : (
                  <span style={{ color: "white", fontSize: "10px" }}></span>
                )}
              </div>
              <button
                className="btn"
                onClick={checkWord}
                disabled={!input || errorMessage !== ""}
              >
                Enter
              </button>
            </div>
          </>
        )}

        {gameState === "lost" && (
          <>
            <div className="lostWIndow">
              <h1 className="level"> You Lost! </h1>
              <h1 className="level">
                {" "}
                Do you want to start from the beggining?{" "}
              </h1>
              <button
                className="btn"
                onClick={async () => {
                  await resetGame();
                }}
              >
                Yes
              </button>
              <button className="btn">No</button>
            </div>
          </>
        )}

        {gameState === "won" && (
          <>
            <h1 className="level">
              Congratulations! Do you want to play again?
            </h1>
            <button
              onClick={async () => {
                await resetGame();
              }}
            >
              Yes
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
