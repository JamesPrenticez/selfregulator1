// const initalState = [
//   {id: 1, task: "Go for a run", boxes: [true, null, null, null, null, false, null]},
//   {id: 2, task: "Meditate", boxes: [null, null, false, null, null, null, null]},
//   {id: 3, task: "Read a book", boxes: [null, null, null, null, true, null, null]},
// ]

export default function Tasks(state = [], action){
  switch(action.type) {
    case "FETCH_TASKS":
      //console.log("Result from FETCH_TASK:", action.tasks)
      return action.tasks

    case "ADD_TASK":
      //console.log("Result from ADD_TASK:", action.task)
      return state
    
    case "ADD_TASK_ERROR":
      //console.log("Result from ADD_TASK_ERROR", action.err)
      return state
    
    case "REMOVE_TASK":
      console.log("Result from DELETE_TASK:", action.task.id)
      return state.filter(task => task.id != action.id)
    
    case "REMOVE_TASK_ERROR":
      //console.log("Result from ADD_TASK_ERROR", action.err)
      return state

    case "UPDATE_BOXES": 
      return state.map(task => task.id == action.id ? {...task, boxes: action.boxes} : task)

    default: 
      return state
  }
}