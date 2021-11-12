import { addDoc, collection} from '@firebase/firestore';
import { db } from "../../firebase"

//Action creators can return functions instead of objects thanks to redux thunk
export const addTask = (task) => {
  return async (dispatch) => {
    //make async call to db
    await addDoc(collection(db, "tasks"), task)
    //send to the reducer
    dispatch({ type: "ADD_TASK", task})
  }
}