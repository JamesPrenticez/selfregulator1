export const setHabits = () => {
  return async (dispatch) => {
    //make async call to db
    await fetch("/api/habits", { 
      method: "GET",
    }).then((res) => {
      return res.json()
    }).then((data) => {
      //console.log(data)
      //send to the reducer
      dispatch({ type: "SET_HABITS", habits: data})
    }).catch((err) => {
      dispatch({type: "SET_HABITS_ERROR", err})
    })
  }
}

