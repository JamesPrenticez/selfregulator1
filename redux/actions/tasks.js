import { addDoc, collection, onSnapshot, docs, doc} from '@firebase/firestore';
import { db } from "../../firebase"

//Action creators can return functions instead of objects thanks to redux thunk
export const addTask = (task) => {
  return async (dispatch) => {
    //make async call to db
    await addDoc(collection(db, "tasks"), {
      ...task,
      username: "JP",
      createdAt: new Date()
    }).then(() => {
      //send to the reducer
      dispatch({ type: "ADD_TASK", task})
    }).catch((err) => {
      dispatch({type: "ADD_TASK_ERROR", err})
    })
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    onSnapshot(collection(db, "tasks"), (snapshot) => {
        const tasks = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dispatch({ type: "FETCH_TASKS", tasks})
      }
    )
  }
}