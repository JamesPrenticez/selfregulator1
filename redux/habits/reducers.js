export default function habits(state = [], action){
  switch(action.type) {
    case "SET_HABITS":
      //console.log("Result from SET_HABITS:", [...state, ...action.habits])
      return action.habits//initialState.concat(action.habits)
    
    case "SET_HABITS_ERROR":
      //console.log("Result from SET_HABITS_ERROR", action.err)
      return state

    // case "ADD_HABIT":
    //   //console.log("Result from ADD_HABIT:", action.habits)
    //   return state
    
    // case "ADD_HABIT_ERROR":
    //   //console.log("Result from ADD_HABIT_ERROR", action.err)
    //   return state
    
    case "DELETE_HABIT":
      //console.log("Result from DELETE_HABIT:", action.habits.id)
      return state.filter(habits => habits.id != action.habits.id)
    
    case "REMOVE_HABITS_ERROR":
      //console.log("Result from DELETE_HABIT_ERROR", action.err)
      return state

    // case "UPDATE_CHECKMARKS": 
    //   return state.map(habit => habit.id == action.id ? {...habit, boxes: action.boxes} : habit)

    default: 
      return state
  }
}