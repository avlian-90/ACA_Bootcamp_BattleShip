import {useEffect} from "react";
import {useGameContext} from "./Context";
import Player from "./components/Player/Player";
import {ACTION_TYPES} from "./state";
import './App.css';

function App() {
  const {state, dispatch} = useGameContext();

  useEffect(() => {
    const { gameStart, player1: { isReady: ready1 },  player2: { isReady: ready2 } }  = state;

    if(ready1 && ready2 && !gameStart) {
      dispatch({type: ACTION_TYPES.START_GAME});
    }
  }, [state]);

  return (
    <div className="game">
      <div className="players">
        <h1>Turn {state.turn}</h1>
        <Player playerID = "player1"/>
        <Player playerID = "player2"/>
      </div>
    </div>
  );
}

export default App;
