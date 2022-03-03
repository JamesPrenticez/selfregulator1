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


export const updateHabitTitle = (habitId) => {
  return async (dispatch) => {
    await fetch(`/api/habits/${habitId}`, {
      method: "PATCH",
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
        dispatch({ type: "UPDATE_HABIT_TITLE", habit: data })
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_HABIT_TITLE_ERROR", err })
      })
  }
}

export const updateCheckmarksById = (habitId, newCheckmarkForSingleDay, indexInWeek) => {
  let data = {
    habitId: habitId,
    newCheckmarkForSingleDay: newCheckmarkForSingleDay,
    indexInWeek: indexInWeek
  }
  return async (dispatch) => {
    await fetch(`/api/habits/checkmarks/${habitId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
        dispatch({ type: "UPDATE_HABIT_CHECKMARKS", habit: data })
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_HABIT_CHECKMARKS_ERROR", err })
      })
  }
}