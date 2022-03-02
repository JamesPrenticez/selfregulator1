import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
import { toggleHamburger } from "../redux/hamburger/actions"
import { useRouter } from "next/router";
import { connect } from "react-redux"
import { useDispatch } from "react-redux" 
import { toggleShowAddHabit } from "../redux/showAddHabit/actions";

const navigation = [

]

const navigationSignedIn = [
  { name: 'ACCOUNT', href: '/account'},
]

function SideNav({hamburger, showAddHabit}){
  const dispatch = useDispatch()
  const router = useRouter();
  const {data: session} = useSession();
  
  let content = null

  if(!session){
    content = (
      <div>
        <button 
          onClick={() => {dispatch(toggleShowAddHabit(!showAddHabit)), dispatch(toggleHamburger(!hamburger))}}
          className="block w-full !text-left cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black"
        >
          ADD NEW HABIT
        </button>
        {navigation.map((item, index) => (
          <a
          key={index}
          >
          <div
              onClick={() => {router.push(`${item.href}`), dispatch(toggleHamburger(!hamburger))}}
              className="block cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black"
            >
              {item.name}
            </div>
          </a>
        ))}

        <button 
          onClick={signIn}
          className="block w-full !text-left cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black"
        >
          SIGN IN
        </button>
    </div>
    )
  }

  if(session){
    content = (
      <div>
        <div className="w-full mt-4 h-auto flex justify-center items-center ">
          <img 
            className="h-32 w-32 rounded-full border-2 border-green-600"
            src={session.user.image}
            alt="profile pic"
          />
        </div>
        <p className="w-full text-center font-kanit text-black border-b border-black py-4">
          {session.user.name}
        </p>
        <button 
          onClick={() => {dispatch(toggleShowAddHabit(!showAddHabit)), dispatch(toggleHamburger(!hamburger))}}
          className="block w-full !text-left cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black"
        >
          ADD NEW HABIT
        </button>
        {navigationSignedIn.map((item, index) => (
          <a
          key={index}
          >
          <div
              onClick={() => {router.push(`${item.href}`), dispatch(toggleHamburger(!hamburger))}}
              className="block cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black"
            >
              {item.name}
            </div>
          </a>
        ))}
        <button 
          onClick={signOut}
          className="block w-full !text-left cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black"
        >
          SIGN OUT
        </button>
    </div>
    )
  }

  return (
    //<div className={`bg-gray-200 w-[20vw] h-screenNav fixed top-20 -right-[20vw] ${hamburger ? 'transform transition duration-700 ease-in-out -translate-x-full' : 'transform transition duration-700 ease-in-out translate-x-full'}`}> 
    <div className={`bg-gray-200 w-60 h-60 fixed -top-40 z-10 ${hamburger ? 'transform transition duration-700 ease-in-out translate-y-60' : 'transform transition duration-700 ease-in-out -translate-y-60'}`}> 
      <div>  
        {content}
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    hamburger: state.hamburger,
    showAddHabit: state.showAddHabit
  }
}


export default connect(mapStateToProps)(SideNav)