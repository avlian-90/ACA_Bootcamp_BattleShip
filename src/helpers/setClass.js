const CLASS_TYPES = {
    SHIP: "ship",
    PASS: "pass",
    HIT: "hit"
  }
  
  export default function setClass(condition, class1, class2 = "") {
    if(condition) {
      return class1;
    } else {
      return class2;
    }
  }
  
  export function setPlayerClass(state, id) {
    const classes = [];
    if(state.ships.has(id)) {
      classes.push(CLASS_TYPES.SHIP);
    }
    if(state.beaten.has(id)) {
      classes.push(CLASS_TYPES.HIT);
    }
    if(state.pass.has(id)) {
      classes.push(CLASS_TYPES.PASS);
    }
    return classes.join(" ");
  }
  
  export function setOpponentClass(state, id) {
    const classes = [];
    if(state.beaten.has(id)) {
      classes.push(CLASS_TYPES.HIT);
    }
    if(state.pass.has(id)) {
      classes.push(CLASS_TYPES.PASS);
    }
    return classes.join(" ");
  }