import React from "react"
import { connect } from "react-redux"

//Sidenav needs to handle two things
// 1) Is Hamburger open or closed?
// 2) Is Session treu or false

const navigation = [
  { name: 'HOME', href: '/'},
]

const navigationSignedIn = [
  { name: 'HOME', href: '/'},
  { name: 'COURSE', href: '/course'},
  { name: 'TOOLS', href: '/tracker'},
  { name: 'FEED', href: '/feed'},
  { name: 'ACCOUNT', href: '/account'},
]

class SideNav extends React.Component{
  render(){
    const {session} = this.props
    const {hamburger} = this.props
    console.log(this.props)
    let content = null

    if(!session){
      content = (
        <div>
          {navigation.map((item, index) => (
            <a
            key={index}
            >
            <div
                className="block cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black"
              >
                {item.name}
              </div>
            </a>
          ))}
          <div className="block cursor-pointer p-4 text-xl font-bold text-black hover:text-white hover:bg-black box-border border-b border-black ">
              LOG IN
          </div>
      </div>
      )
    }

    if(session){
      content = (
        <>
        <h1>Yes Session</h1>
        </>
      )
    }

    return (
      <div className={`md:hidden bg-gray-200 w-full h-screenNav fixed top-20 -right-full ${hamburger ? 'transform transition duration-1000 ease-in-out -translate-x-full' : 'transform transition duration-1000 ease-in-out translate-x-full'}`}> 
        <div>  
        {hamburger ? content : "" }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hamburger: state.hamburger
  }
}


export default connect(mapStateToProps)(SideNav)
