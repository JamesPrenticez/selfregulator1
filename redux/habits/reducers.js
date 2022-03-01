const initialState = [
  {
    id: "1",
    title: "Work on Bussiness",
    description: "Deliberate work for 1hour",
    color: "rgb(250, 204, 21, 0.9)",
    checkmarks: '[{"date":"28-02-2022","value":null}, {"date":"01-03-2022","value":null}, {"date":"02-03-2022","value":null}, {"date":"03-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"05-03-2022","value":null}]',
  },
  {
    id: "2",
    title: "Exercise",
    description: "Walk for 30mins",
    color: "rgb(217, 70, 239, 0.9)",
    checkmarks: '[{"date":"28-02-2022","value":true}, {"date":"01-03-2022","value":null}, {"date":"02-03-2022","value":null}, {"date":"03-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"05-03-2022","value":null}]',
  },
  {
    id: "3",
    title: "Meditate",
    description: "Relax with eyes closed for 30mins",
    color: "rgb(22, 163, 74, 0.9)",
    checkmarks: '[{"date":"28-02-2022","value":false}, {"date":"01-03-2022","value":null}, {"date":"02-03-2022","value":null}, {"date":"03-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"05-03-2022","value":null}]',
  },
  {
    id: '4',
    title: "Sleep",
    description: "Wake up 7am & go to bed 10pm",
    color: " rgb(14, 165, 233, 0.9)",
    checkmarks: '[{"date":"28-02-2022","value":null}, {"date":"01-03-2022","value":null}, {"date":"02-03-2022","value":null}, {"date":"03-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"04-03-2022","value":null}, {"date":"05-03-2022","value":null}]',
  },
]


export default function habits(state = [], action){
  switch(action.type) {
    case "SET_HABITS":
      //console.log("Result from SET_HABITS:", [...state, ...action.habits])
      return initialState.concat(action.habits)
    
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