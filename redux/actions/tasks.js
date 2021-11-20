import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc} from '@firebase/firestore';
import { db } from "../../firebase"

export const fetchTasks = (uid) => {
  console.log(uid)
  return (dispatch) => {
    onSnapshot(collection(db, "tasks", uid, "task"), (snapshot) => {
        const tasks = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dispatch({ type: "FETCH_TASKS", tasks})
      }
    )
  }
}

//Action creators can return functions instead of objects thanks to redux thunk
export const addTask = (task, uid) => {
  console.log(task, uid)
  return async (dispatch) => {
    //make async call to db
    await addDoc(collection(db, "tasks", uid, "task"), {
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

export const deleteTask = (uid, id) => {
  return async (dispatch) => {
    await deleteDoc(doc(db, "tasks", uid, "task", id)
  ).then(() => {
    dispatch({ type: "DELETE_TASK", task})
  }).catch((err) => {
    dispatch({type: "DELETE_TASK_ERROR", err})
  })
  }
}

//Firebase doesnt have the ability to update a single index in an array so we have to update the entire array...
export const updateBoxes = (uid, id, array) => {
  return async (dispatch) => {
    await updateDoc(doc(db, "tasks", uid, "task", id), {
      boxes: array
    }
    ).then(() => {
      dispatch({ type: "UPDATE_BOX", task})
    }).catch((err) => {
      dispatch({type: "UPDATE_TASK_ERROR", err})
    })
  }
}