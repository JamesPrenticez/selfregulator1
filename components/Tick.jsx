import { useState } from "react"

function Tick() {
  const [active, setActive] = useState(null)

  const animate = () => {
    console.log(active)
    setActive(!active)
  }

  return (
    <div>
      <h1>Hello</h1>


      <div
        className="h-10 w-10 bg-black rounded-full hover:cursor-pointer"
        onClick={animate}>
      {active === true ? (
        <svg 
          className="text-green-600"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
        >
          <circle strokeWidth="33px" fill="none" stroke="currentColor" cx="249.704" cy="250.887" r="221.206"/>
          <line className="transform transition duration-500 ease-in-out" fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="138.462" y1="293.49" x2="207.1" y2="343.787"/>
          <line className="transform transition duration-500 ease-in-out" fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="207.1" y1="343.787" x2="367.455" y2="151.282" transform="matrix(-1, 0, 0, -1, 574.554993, 495.068985)"/>
        </svg>
      ) : active === false ? (
        <svg 
        className="text-red-600"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
      >
          <circle strokeWidth="33px" fill="none" stroke="currentColor" cx="249.704" cy="250.887" r="221.206"/>
          <line className="transform transition duration-500 ease-in-out" fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="161.538" y1="159.762" x2="344.97" y2="341.616"/>
          <line className="transform transition duration-500 ease-in-out" fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="161.538" y1="341.616" x2="344.97" y2="159.762" transform="matrix(-1, 0, 0, -1, 506.507996, 501.377991)"/>
        </svg>
      ) : ""}
      </div>





    </div>
  )
}

export default Tick
