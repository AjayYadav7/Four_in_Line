import React, { useEffect, useRef, useState } from 'react';
import YellowMarker from "../../../assets/images/marker-yellow.svg";
import RedMarker from "../../../assets/images/marker-red.svg";
import PlayerOne from "../../../assets/images/player-one.svg";
import PlayerTwo from "../../../assets/images/player-two.svg";
import { useLocation } from 'react-router-dom';
import BlackBoard from "../../../assets/images/board-layer-black-large.svg";
import SmallBlackBoard from "../../../assets/images/board-layer-black-small.svg";

import WhiteBoard from "../../../assets/images/board-layer-white-large.svg";
import SmallWhiteBoard from "../../../assets/images/board-layer-white-small.svg";
import Ball from '../../../components/ball/Ball';
import YellowTurn from "../../../assets/images/turn-background-yellow.svg";
import RedTurn from "../../../assets/images/turn-background-red.svg";
import CPU from "../../../assets/images/cpu.svg";

import './multiplayer.css';

let winningArray = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 7, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
];


const Multiplayer = () => {
  // const location = useLocation();
  const isPlayer = 'location';
  const [markerMove, setMarkerMove] = useState({ x: 200, y: 200 });
  const [turn, setTurn] = useState(true);
  const [yellowScore, setYellowScore] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [winner, setWinner] = useState("");
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [balls, setBalls] = useState([]);
  const [redPlayerBalls, setRedPlayerBalls] = useState([]);
  const [yellowPlayerBalls, setYellowPlayerBalls] = useState([]);
  const [cpuTurn, setcpuTurn] = useState(true);
  const [winningBalls, setWinningBalls] = useState([]);
  const [redScore, setRedScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [timer, setTimer] = useState(0);


  const [slot, setSlot] = useState({
    0: 5,
    1: 5,
    2: 5,
    3: 5,
    4: 5,
    5: 5,
    6: 5,
  });

  const boardRef = useRef();
  //
  const button1 = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  const button5 = useRef();
  const button6 = useRef();
  const button7 = useRef();


  useEffect(() => {
    let newBalls = balls.map((ball) => {
      if (
        String(ball.num) === String(winningBalls[0]) ||
        String(ball.num) === String(winningBalls[1]) ||
        String(ball.num) === String(winningBalls[2]) ||
        String(ball.num) === String(winningBalls[3])
      ) {
        return {
          check: true,
          color: ball.color,
          left: ball.left,
          num: ball.num,
          top: ball.top,
        };
      } else {
        return {
          check: false,
          color: ball.color,
          left: ball.left,
          num: ball.num,
          top: ball.top,
        };
      }
    });

    setBalls(newBalls);

    if (winner === "red") {
      setRedScore(redScore + 1);
    } else {
      setYellowScore(yellowScore + 1);
    }

    setIsGameFinished(false);
  }, [winningBalls, isGameFinished]);

  //not clear the use
  useEffect(() => {
    // const gapPositions = {
    //   id: 51,
    //   x: ,
    //   y: boardRef.current.offsetTop + 65 * 1 + 15 + 17 * 0,
    // };
    setYellowPlayerBalls([]);
    setRedPlayerBalls([]);
    // setBoardPosition({
    //   x: boardRef.current.offsetLeft,
    //   y: boardRef.current.offsetTop,
    // });
    setRedScore(0);
    setYellowScore(0);
    setTurn(!turn);
    setcpuTurn(!cpuTurn);
    // const height = window.innerHeight;
    const width = window.innerWidth;
    if (width < 1190) {
      setIsScreenSmall(true);
    }
  }, []);


  // Decides wining
  useEffect(() => {
    let redCounter = 0;
    let yellowCounter = 0;
    for (let i = 0; i < winningArray.length; i++) {
      for (let j = 0; j < winningArray[i].length; j++) {
        if (redPlayerBalls.includes(winningArray[i][j])) {
          redCounter++;
        } else if (yellowPlayerBalls.includes(winningArray[i][j])) {
          yellowCounter++;
        }
        if (redCounter > 3) {
          setWinner("yellow");

          let won = winningArray[i];
          setWinningBalls(won);

          break;
        }

        if (yellowCounter > 3) {
          setWinner("red");

          let won = winningArray[i];
          setWinningBalls(won);
          break;
        }
      }
      redCounter = 0;
      yellowCounter = 0;
    }
  }, [turn]);



  const updateDisplay = (event) => {
    setMarkerMove({ x: event.clientX, y: event.clientY });
  }

  const handlePlay = (event) => {
    console.log("compare event",event)
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 600);

    // console.log(typeof event.target.id);
    if (slot[event.target.id] >= 0 && !winner) {
      // setBoardPosition({
      //   x: boardRef.current.offsetLeft,
      //   y: boardRef.current.offsetTop,
      // });

      if (!isScreenSmall) {
        setBalls([
          ...balls,
          {
            color: turn ? "yellow" : "red",
            left:
              68 * Number(event.target.id) +
              15 +
              20 * (Number(event.target.id) - 1) +
              25,
            top:
              69 * slot[Number(event.target.id)] +
              15 +
              20 * slot[Number(event.target.id)] +
              4,
            num: slot[Number(event.target.id)] * 7 + Number(event.target.id),
            check: false,
          },
        ]);

        if (turn) {
          setRedPlayerBalls([
            ...redPlayerBalls,
            slot[Number(event.target.id)] * 7 + Number(event.target.id),
          ]);
        } else {
          setYellowPlayerBalls([
            ...yellowPlayerBalls,
            slot[Number(event.target.id)] * 7 + Number(event.target.id),
          ]);
        }

        setSlot({
          ...slot,
          [Number(event.target.id)]: slot[Number(event.target.id)] - 1,
        });
      } else {
        setBalls([
          ...balls,
          {
            color: turn ? "yellow" : "red",
            left:
              33.5 * Number(event.target.id) +
              15 +
              13 * (Number(event.target.id) - 1) +
              10,
            top:
              33.5 * slot[Number(event.target.id)] +
              10 +
              15 * slot[Number(event.target.id)] +
              10,
            num: slot[Number(event.target.id)] * 7 + Number(event.target.id),
            check: false,
          },
        ]);

        if (turn) {
          setRedPlayerBalls([
            ...redPlayerBalls,
            slot[Number(event.target.id)] * 7 + Number(event.target.id),
          ]);
        } else {
          setYellowPlayerBalls([
            ...yellowPlayerBalls,
            slot[Number(event.target.id)] * 7 + Number(event.target.id),
          ]);
        }

        setSlot({
          ...slot,
          [Number(event.target.id)]: slot[Number(event.target.id)] - 1,
        });
      }
      setTurn(!turn);
    }

    if (!winner && !isPlayer && turn) {
      setcpuTurn(!cpuTurn);
      setTurn(!turn);
    }
  };

  const handleReset = () => {
    setBalls([]);
    setTimer(0);
    setWinner("");
    setRedPlayerBalls([]);
    setYellowPlayerBalls([]);
    setSlot({
      0: 5,
      1: 5,
      2: 5,
      3: 5,
      4: 5,
      5: 5,
      6: 5,
    });
  };

  return (
    <div>
      Multiplayer
      <img
        src={!turn ? YellowMarker : RedMarker}
        className='marker'
        style={{ position: "absolute", left: `${markerMove.x}px` }}
        alt="YellowMarker"
      />
      <div className="main">
        {/* <div sx={styles.playerOne({theme})}>
          <img src={PlayerOne} alt="PlayerOne" />
          <Typography>{!isPlayer ? "YOU" : "PLAYER 1"}</Typography>
          <Typography variant='h2'>{yellowScore}</Typography>
        </div> */}
        <div
          // sx={styles.board({theme})}
          className="board"
          // onMouseEnter={updateDisplay}
          // onMouseLeave={updateDisplay}
          onMouseMove={updateDisplay}
          // onClick={handlePlay}
          ref={boardRef}
          >
          <button
            id="0"
            className='mobileButton'
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button1}
          >
            1
          </button>
          <button
            id="1"
            className='mobileButton'
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button2}
          >
            2
          </button>
          <button
            id="2"
            className='mobileButton'
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button3}
          >
            3
          </button>
          <button
            id="3"
            className='mobileButton'
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button4}
          >
            4
          </button>
          <button
            id="4"
            className='mobileButton'
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button5}
          >
            5
          </button>
          <button
            id="5"
            className='mobileButton'
            button1
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button6}
          >
            6
          </button>
          <button
            className='mobileButton'
            onClick={handlePlay}
            disabled={isButtonDisabled}
            ref={button7}
            id="6"
          >
            7
          </button>
          {console.log("compare balls",balls)}
          {balls.map((ball) => {
            return (
              <div
                key={ball.num}
                className={`${ball.check && 'ballDiv'} ${
                  'ballClass'
                }`}
                style={{
                  position: "absolute",
                  left: `${ball.left}px`,
                  top: `${ball.top}px`,
                  zIndex: "4",
                }}
              >
                <Ball turn={turn} ball={ball} isScreenSmall={isScreenSmall} />
              </div>
            );
          })}
          <img
            src={isScreenSmall ? SmallBlackBoard : BlackBoard}
            alt="BlackBoard"
            className='BlackBoard'
          />
          <img
            src={isScreenSmall ? SmallWhiteBoard : WhiteBoard}
            alt="WhiteBoard"
            className='WhiteBoard'
          />
          
        </div>
        {/* <div className='playerTwo'>
          <img src={isPlayer ? PlayerTwo : CPU} alt="PlayerTwo" />
          
          <p>{!isPlayer ? "CPU" : "PLAYER 2"}</p>
          
          <h2>{redScore}</h2>
        </div> */}
        {/* </div> */}
        <div className="winnerBoard" onClick={handleReset}>Reset game</div>
        {/* {
          winner ? (
            <div className='winnerBoard'>
            <p>
              {!isPlayer && turn
                ? "CPU"
                : !isPlayer
                ? "PLAYER "
                : winner === "yellow"
                ? "PLAYER 1"
                : "PLAYER 2"}
            </p>
            <h2>WINS</h2>
            <button onClick={{}}>PLAY AGAIN</button>
            </div>
          ) : (
            <div className='turn'>
              <img
                className='yellowTurn'
                src={!turn ? YellowTurn : RedTurn}
                alt="YellowTurn"
              />
              <div
                className='turnText'
                style={{ color: !turn ? "black" : "rgb(251, 251, 251)" }}
              >
                <p style={{ marginTop: "9px" }}>
                  {!isPlayer && turn
                    ? "PLAYER"
                    : !isPlayer && !turn
                    ? "CPU"
                    : turn
                    ? "PLAYER 1"
                    : " PLAYER 2"}
                  'S TURN
                </p>
                <h2>{timer}s</h2>
              </div>
            </div>
          )
        } */}

      </div>
    </div>
  )
}

export default Multiplayer