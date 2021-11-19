// An action is a plain JavaScript object that has a type field
// You can think of an action as an event that describes something that happened in the application.
// The type field should be a string that gives this action a descriptive name, like "todos/todoAdded"
// An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.
// An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:
export const TOGGLE_HAMBURGER = 'TOGGLE_HAMBURGER'

export function toggleHamburger(bool){
  console.log("action")
  return ({
    type: TOGGLE_HAMBURGER,
    bool
  }
  )
}
