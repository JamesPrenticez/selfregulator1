import React from "react"
import { connect } from "react-redux"
import { toggleHamburger } from "../redux/hamburger/actions"
import { useDispatch } from "react-redux" 

function Hamburger({hamburger}){
  const dispatch = useDispatch()
    return (
        <button className="text-white md:hidden ml-auto outline-none h-20 w-20 flex justify-center items-center" 
          onClick={() => dispatch(toggleHamburger(!hamburger))}
        >
          {/* --------- top ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out opacity-0' : 'absolute mb-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
          {/* --------- two in the middle ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out -rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out '}`}></span>
          {/* --------- bottom ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccentrounded transform transition duration-1000 ease-in-out opacity-0' : 'absolute mt-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
        </button>
    )
}

function mapStateToProps(state){
  return {
    hamburger: state.hamburger,
  }
}

export default connect(mapStateToProps)(Hamburger)