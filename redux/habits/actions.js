export const setHabits = () => {
  return async (dispatch) => {
    //make async call to db
    await fetch("/api/habits", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data)
        //send to the reducer
        dispatch({ type: "SET_HABITS", habits: data })
      })
      .catch((err) => {
        dispatch({ type: "SET_HABITS_ERROR", err })
      })
  }
}

export const deleteHabitById = (habitId) => {
  return async (dispatch) => {
    await fetch(`/api/habits/${habitId}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
        dispatch({ type: "DELETE_HABIT", habits: data })
      })
      .catch((err) => {
        dispatch({ type: "DELETE_HABIT_ERROR", err })
      })
  }
}