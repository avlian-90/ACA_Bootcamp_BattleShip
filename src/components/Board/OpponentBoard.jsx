import setClass, {setOpponentClass} from "../../helpers/setClass";
import groupArray from "../../helpers/groupArray";
import {ACTION_TYPES} from "../../state";
import {useGameContext} from "../../Context";

export default function OpponentBoard({ playerID, opponentID }){
  const {state, dispatch} = useGameContext();

  const { [opponentID]: { isSetShipsMode } } = state;

  function hitShip(id) {
    if(state[opponentID].ships.has(id)) {
      dispatch({type: ACTION_TYPES.SET_BEATEN, id, opponentID});
    } else {
      dispatch({type: ACTION_TYPES.SET_PASS, id, opponentID});
    }
  }

  return (
    <div className={setClass(isSetShipsMode,"set_ships_mode")}>
      <h1>Player {opponentID}</h1>
      {groupArray().map(row => <div key={row} className="row">
        {row.map(square => (
          <div key={square} className="square" onClick={() => hitShip(square)}>
            <div className={setOpponentClass(state[opponentID], square)} />
          </div>))}
      </div>)}
    </div>
  );
}