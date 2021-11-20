import { connect, useDispatch } from "react-redux"
import { deleteTask } from "../redux/actions/tasks"
import { TrashIcon } from "@heroicons/react/outline";

function Task({session, item, currentDayIndex, daysThisWeek}) {
  const uid = session?.user.uid
  const dispatch = useDispatch()

  return (
    <div
      key={item.id}
      className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center xl:text-2xl gap-x-1"
    >
      <div className="col-span-5 inline-flex text-xs md:text-base">
        <p className="!text-left">{item.task}</p>
        {/* Add some sort of hover/show here */}
        <TrashIcon onClick={() => dispatch(deleteTask(uid, item.id))}className="navBtn mr-2 ml-auto" />
      </div>

      {item.boxes.map((box, index) => (
        <div
          key={index}
          className={`mt-2 rounded-full border-2 border-custom-senaryAccent h-6 w-6 sm:h-10 sm:w-10 flex justify-center items-center text-center gap-1 hover:border-custom-primaryAccent hover:cursor-pointer
          ${currentDayIndex === index && "text-custom-primaryAccent"}
        `}
        >
            {box === true ?
              <svg 
                className="text-green-600"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
              >
                <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="138.462" y1="293.49" x2="207.1" y2="343.787"/>
                <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="207.1" y1="343.787" x2="367.455" y2="151.282" transform="matrix(-1, 0, 0, -1, 574.554993, 495.068985)"/>
              </svg>
              : box === false ? 
              <svg 
                className="text-red-600"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
              >
                <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="161.538" y1="159.762" x2="344.97" y2="341.616"/>
                <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="161.538" y1="341.616" x2="344.97" y2="159.762" transform="matrix(-1, 0, 0, -1, 506.507996, 501.377991)"/>
              </svg>
            : 
              <div className="text-xs md:text-base font-light md:font-medium font-kanit">
                {daysThisWeek[index]}
              </div>
            }
        </div>
      ))}
    </div>
  )
}
export default connect()(Task);