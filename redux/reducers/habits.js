export default function Habits(state = [], action){
  switch(action.type) {
    // case "ADD_HABITS":
    //   //console.log("Result from ADD_HABIT:", action.habit)
    //   return state
    
    // case "ADD_HABITS_ERROR":
    //   //console.log("Result from ADD_HABIT_ERROR", action.err)
    //   return state
    
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