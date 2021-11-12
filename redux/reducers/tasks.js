import {REMOVE_TASK, SET_TASKS} from '../actions/tasks.js'

const initalState = [
  {id: 1, task: "Go for a run", boxes: [true, null, null, null, null, false, null]},
  {id: 2, task: "Meditate", boxes: [null, null, false, null, null, null, null]},
  {id: 3, task: "Read a book", boxes: [null, null, null, null, true, null, null]},
]

export default function Tasks(state = initalState, action){
  switch(action.type) {
    case SET_TASKS: 
      return action.tasks
    
    case REMOVE_TASK:
      return state.filter(task => task.id != action.id)

    default: 
      return state
  }
}