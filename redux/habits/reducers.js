export default function habits(state = [], action){
  switch(action.type) {
    case "SET_HABITS":
      //console.log("Result from SET_HABITS:", [...state, ...action.habits])
      return action.habits//initialState.concat(action.habits)
    
    case "SET_HABITS_ERROR":
      //console.log("Result from SET_HABITS_ERROR", action.err)
      return state

    // NOT REQUIRED CAN DELETE
    // case "ADD_HABIT":
    //   //console.log("Result from ADD_HABIT:", action.habits)
    //   return state
    
    // case "ADD_HABIT_ERROR":
    //   //console.log("Result from ADD_HABIT_ERROR", action.err)
    //   return state
    
    case "DELETE_HABIT":
      //console.log("Result from DELETE_HABIT:", action.habit.id)
      return state.filter(x => x.id != action.habit.id)
    
    case "REMOVE_HABITS_ERROR":
      //console.log("Result from DELETE_HABIT_ERROR", action.err)
      return state

    case "UPDATE_HABIT": 
    //console.log("Result from UPDATE_HABIT:", action.habit,title)
      return state.map(x => x.id == action.habit.id ? {...x, title: action.habit.title} : x)

    default: 
      return state
  }
}