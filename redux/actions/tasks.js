import { addDoc, collection, onSnapshot, docs, doc, deleteDoc} from '@firebase/firestore';
import { db } from "../../firebase"

export const fetchTasks = () => {
  return (dispatch) => {
    onSnapshot(collection(db, "tasks"), (snapshot) => {
        const tasks = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dispatch({ type: "FETCH_TASKS", tasks})
      }
    )
  }
}

//Action creators can return functions instead of objects thanks to redux thunk
export const addTask = (task) => {
  return async (dispatch) => {
    //make async call to db
    await addDoc(collection(db, "tasks"), {
      ...task,
      createdAt: new Date()
    }).then(() => {
      //send to the reducer
      dispatch({ type: "ADD_TASK", task})
    }).catch((err) => {
      dispatch({type: "ADD_TASK_ERROR", err})
    })
  }
}

export const deleteTask = () => {
  return async (dispatch) => {
    await deleteDoc(collection(db, "tasks", user, "task", id)
  ).then(() => {
    dispatch({ type: "DELETE_TASK", task})
  }).catch((err) => {
    dispatch({type: "DELE_TASK_ERROR", err})
  })
  }
}