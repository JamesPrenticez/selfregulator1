import { signIn, signOut, useSession } from "next-auth/react";
import { connect } from "react-redux"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux" 
import DarkModeToggle from "./DarkMode"
import Hamburger from "./Hamburger";
import SideNav from "./SideNav"
import { PlusIcon } from "@heroicons/react/solid"
import { toggleShowAddHabit } from "../redux/showAddHabit/actions";


function Header({showAddHabit}) {
    return (
        <>
            <div className="shadow-sm border-b border-custom-tertiaryAccent sticky top-0 fade h-20 max-w-7xl mx-auto ">
                <div className="w-full max-w-7xl h-20 bg-custom-primary z-20 fixed top-0"></div>
                <Hamburger className="fixed top-0 z-50"/>
                <SideNav className="z-10" />
                <DarkModeToggle className="fixed top-0 z-50 ml-10"/>
            </div>
        </>
    )
}

function mapStateToProps(state){
    return {
      showAddHabit: state.showAddHabit
    }
  }
  
  
  export default connect(mapStateToProps)(Header)

//   <PlusIcon
//   className="h-7 md:h-6 text-custom-secondary md:inline-flex cursor-pointer transform transition-all hover:scale-125 duration-150 ease-out" 
//   onClick={() => dispatch(toggleShowAddHabit(!showAddHabit))}
// />