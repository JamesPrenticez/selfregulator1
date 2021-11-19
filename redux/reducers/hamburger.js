export default function Hamburger(state=false, action){
  switch(action.type) {
    case "TOGGLE_HAMBUGER":
      return action.bool
      default: 
      return state
  }
}