export const TOGGLE_HAMBURGER = 'TOGGLE_HAMBURGER'

export function toggleHamburger(bool){
  return ({
      type: TOGGLE_HAMBURGER,
      bool
    }
  )
}