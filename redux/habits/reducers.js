const initialState = [
  {
    id: "1",
    title: "Work on Bussiness",
    description: "Deliberate work for 1hour",
    color: "rgb(250, 204, 21, 0.9)",
    checkmarks: "[{date: '', value: true}, {date: '', value: true}, {date: '', value: true}, {date: '03-03-2022', value: true}, {date: '04-03-2022', value: true}, {date: '', value: true}, {date: '', value: true}]",
  },
  {
    id: "2",
    title: "Exercise",
    description: "Walk for 30mins",
    color: "rgb(217, 70, 239, 0.9)",
    checkmarks: "[{date: '', value: true}, {date: '', value: true}, {date: '', value: true}, {date: '03-03-2022', value: true}, {date: '04-03-2022', value: true}, {date: '', value: true}, {date: '', value: true}]",
  },
  {
    id: "3",
    title: "Meditate",
    description: "Relax with eyes closed for 30mins",
    color: "rgb(22, 163, 74, 0.9)",
    checkmarks: "[{date: '', value: true}, {date: '', value: true}, {date: '', value: true}, {date: '03-03-2022', value: true}, {date: '04-03-2022', value: true}, {date: '', value: true}, {date: '', value: true}]",
  },
  {
    id: '4',
    title: "Sleep",
    description: "Wake up 7am & go to bed 10pm",
    color: " rgb(14, 165, 233, 0.9)",
    checkmarks: "[{date: '', value: true}, {date: '', value: true}, {date: '', value: true}, {date: '03-03-2022', value: true}, {date: '04-03-2022', value: true}, {date: '', value: true}, {date: '', value: true}]",
  },
]


export default function addHabits(state = initialState, action){
  switch(action.type) {
    case "SET_HABITS":
      console.log("Result from SET_HABITS:", [...state, ...action.habits])
      return [...state, ...action.habits]
    
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