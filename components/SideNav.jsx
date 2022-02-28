import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
import { toggleHamburger } from "../redux/actions/hamburger"
import { useRouter } from "next/router";
import { connect } from "react-redux"
import { useDispatch } from "react-redux" 

const navigation = [
  { name: 'HOME', href: '/'},
]

const navigationSignedIn = [
  { name: 'HOME', href: '/'},
  { name: 'HABIT TRACKER', href: '/tools'},
  { name: 'COURSE', href: '/course'},
  { name: 'ACCOUNT', href: '/account'},
]

function SideNav({hamburger}){
  const dispatch = useDispatch()
  const router = useRouter();
  const {data: session} = useSession();
  
  let content = null

  if(!session){
    content = (
      <div>
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
    <div className={`md:hidden bg-gray-200 w-full h-screenNav fixed top-20 -right-full ${hamburger ? 'transform transition duration-700 ease-in-out -translate-x-full' : 'transform transition duration-700 ease-in-out translate-x-full'}`}> 
      <div>  
      {hamburger ? content : "" }
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    hamburger: state.hamburger
  }
}


export default connect(mapStateToProps)(SideNav)