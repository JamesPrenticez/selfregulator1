import React, {useRef, useState} from "react"
import { signIn, signOut, session } from "next-auth/react";
import { PlusIcon, LoginIcon, LogoutIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { toggleShowAddHabit } from "../redux/showAddHabit/actions"
import { useDispatch } from "react-redux";

function Hamburger({showAddHabit}){
  const [hamburger, setHamburger] = useState(false)
  const dropDownMenu = useRef(null);
  const dispatch = useDispatch();

    return (
      <div
        className="z-50 fixed top-0 text-white outline-none " 
        ref={dropDownMenu}
        tabIndex = {0}
        onClick={() => dropDownMenu.current.focus()}
        onBlur={() => setHamburger(false)}
      >
        {/* Hamburger */}
        <div 
          className="h-20 w-20 fixed top-0 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setHamburger(!hamburger)
          
          }
        >
          {/* --------- top ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out opacity-0' : 'absolute mb-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
          {/* --------- two in the middle ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out -rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccent rounded transform transition duration-500 ease-in-out rotate-45' : 'absolute h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out '}`}></span>
          {/* --------- bottom ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-custom-secondaryAccentrounded transform transition duration-1000 ease-in-out opacity-0' : 'absolute mt-4 h-1 w-7 rounded bg-custom-secondaryAccent transform transition duration-500 ease-in-out'}`}></span>
        </div>

        {/* Cover Container */}
        <div className="h-[4.9rem] w-[15.5rem] bg-neutral-900 z-30 fixed top-0"></div>
        
        {/* Dropdown Menu */}
        <div 
        className={`z-10 fixed -top-40 bg-neutral-600 w-60 shadow-[10px_10px_10px_0] shadow-[#191b22] tab-index-0 focus:ring-2 ring-green-600 ring-inset
        ${hamburger ? 'transform transition duration-700 ease-in-out translate-y-60' 
                    : 'transform transition duration-700 ease-in-out -translate-y-60'}
        `}
        > 
          <button 
            onClick={() => {dispatch(toggleShowAddHabit(!showAddHabit))}}
            className="inline-flex justify-between w-full !text-left cursor-pointer p-4 text-xl font-bold text-green-600 hover:bg-green-600 hover:text-black box-border border-b border-green-600"
          >
            ADD NEW HABIT
            <PlusIcon className="h-7" />
          </button>
          
          {false ? //session
          <>
            <Link href={`/user/${session?.user.email}`} passHref>
              <button 
              className="inline-flex justify-between w-full !text-left cursor-pointer p-4 text-xl font-bold text-green-600 hover:bg-green-600 hover:text-black box-border border-b border-green-600"
              >
                ACCOUNT
                <UserIcon className="h-7" />
              </button>
            </Link>

            <button 
              onClick={signOut}
              className="inline-flex justify-between w-full !text-left cursor-pointer p-4 text-xl font-bold text-green-600 hover:bg-green-600 hover:text-black box-border border-b border-green-600"
            >
              SIGN OUT
              <LogoutIcon className="h-7" />
            </button>
          </> 
          : // !session
          <>
            <button 
              onClick={signIn}
              className="inline-flex justify-between w-full !text-left cursor-pointer p-4 text-xl font-bold text-green-600 hover:bg-green-600 hover:text-black box-border border-b border-green-600"
            >
              SIGN IN
              <LoginIcon className="h-7" />
            </button>
          </>
          }
        </div>
      </div>
    )
}

export default Hamburger