export default function addHabits(state = [], action){
  switch(action.type) {
    case "SET_HABITS":
      console.log("Result from SET_HABITS:", action)
      return action.habits
    
    case "SET_HABITS_ERROR":
      console.log("Result from SET_HABITS_ERROR", action.err)
      return state

    case "ADD_HABIT":
      console.log("Result from ADD_HABIT:", action.habits)
      return state
    
    case "ADD_HABIT_ERROR":
      console.log("Result from ADD_HABIT_ERROR", action.err)
      return state
    
    // case "REMOVE_HABITS":
    //   //console.log("Result from DELETE_HABIT:", action.habit.id)
    //   return state.filter(habit => habit.id != action.id)
    
    // case "REMOVE_HABITS_ERROR":
    //   //console.log("Result from ADD_HABIT_ERROR", action.err)
    //   return state

    // case "UPDATE_CHECKMARKS": 
    //   return state.map(habit => habit.id == action.id ? {...habit, boxes: action.boxes} : habit)

    default: 
      return state
  }
}