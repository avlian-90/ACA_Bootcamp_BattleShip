export const ACTION_TYPES = {
    SET_SHIPS: "SET_SHIPS",
    SET_BEATEN: "SET_BEATEN",
    SET_PASS: "SET_PASS",
    SET_SET_SHIPS_MODE: "SET_SET_SHIPS_MODE",
    START_GAME: "START_GAME",
    SET_IS_READY: "SET_IS_READY",
  };
  
  export const defaultState = {
    player1:{
      isSetShipsMode: false,
      ships: new Set(),
      beaten: new Set(),
      pass: new Set(),
      isReady: false,
    },
    player2:{
      isSetShipsMode: false,
      ships: new Set(),
      beaten: new Set(),
      pass: new Set(),
      isReady: false,
    },
    gameStart: false,
    turn: "player1",
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.SET_SET_SHIPS_MODE: {
        return {...state, [action.playerID]: {...state[action.playerID], isSetShipsMode: !state[action.playerID].isSetShipsMode}};
      }
      case ACTION_TYPES.SET_SHIPS: {
        const newShips = new Set([...state[action.playerID].ships]);
        if(newShips.has(action.square)){
          newShips.delete(action.square);
        } else {
          newShips.add(action.square);
        }
        return {...state, [action.playerID]: {...state[action.playerID], ships: newShips}};
      }
      case ACTION_TYPES.SET_BEATEN: {
        const newBeaten = new Set([...state[action.opponentID].beaten]);
        newBeaten.add(action.id);
        return {...state, [action.opponentID]: {...state[action.opponentID], beaten: newBeaten}};
      }
      case ACTION_TYPES.SET_PASS: {
        const newPass = new Set([...state[action.opponentID].pass]);
        newPass.add(action.id);
        return {...state, [action.opponentID]: {...state[action.opponentID], pass: newPass}};
      }
      case ACTION_TYPES.SET_IS_READY: {
        return {
          ...state,
          [action.playerID]: {...state[action.playerID], isReady: true}
        };
      }
      case ACTION_TYPES.START_GAME: {
        return {...state, gameStart: true};
      }
    }
  }