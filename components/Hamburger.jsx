import React from "react"
import { connect } from "react-redux"
import { toggleHamburger } from "../redux/actions/hambuger"

class Hamburger extends React.Component{
  render(){
  console.log(this.props)
    return (
      <div>
        <button className="text-white md:hidden ml-auto outline-none mr-8" 
          onClick={() => toggleHamburger(true)}>
          <div className="flex justify-center items-center h-20 w-20 ">
              {/* --------- top ---------*/}
              <span className={`${true ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out opacity-0' : 'absolute mb-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
              {/* --------- two in the middle ---------*/}
              <span className={`${true ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out -rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
              <span className={`${true ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out '}`}></span>
              {/* --------- bottom ---------*/}
              <span className={`${true ? 'absolute h-1 w-7 bg-custom-secondaryAccentrounded transform transition duration-1000 ease-in-out opacity-0' : 'absolute mt-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
          </div>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hamburger: state.hamburger
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHamburger: () => dispatch(toggleHamburger())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)
