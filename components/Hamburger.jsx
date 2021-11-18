import { useState } from "react"

function Hamburger() {
  const [hamburgerActive, toggleHamburger] = useState(false)
  return (
    <div>
      <button className="text-white md:hidden ml-auto outline-none mr-8" 
        onClick={() => toggleHamburger(!hamburgerActive)}>
        <div className="flex justify-center items-center h-20 w-20 ">
            {/* --------- top ---------*/}
            <span className={`${hamburgerActive ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out opacity-0' : 'absolute mb-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
            {/* --------- two in the middle ---------*/}
            <span className={`${hamburgerActive ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out -rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
            <span className={`${hamburgerActive ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out '}`}></span>
            {/* --------- bottom ---------*/}
            <span className={`${hamburgerActive ? 'absolute h-1 w-7 bg-custom-secondaryAccentrounded transform transition duration-1000 ease-in-out opacity-0' : 'absolute mt-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
        </div>
      </button>
    </div>
  )
}

export default Hamburger
