export const TOGGLE_SHOWADDHABIT = 'TOGGLE_SHOWADDHABIT'

export function toggleShowAddHabit(bool){
  return ({
      type: TOGGLE_SHOWADDHABIT ,
      bool
    }
  )
}