import { connect, useDispatch } from "react-redux"
import { deleteTask, updateBoxes } from "../../redux/actions/tasks"
import { TrashIcon } from "@heroicons/react/outline";
        
function Task({session, item, currentDayIndex, daysThisWeek}) {
  const uid = session?.user.uid
  const dispatch = useDispatch()

  //handle box in the boxes array
  const handleBox = (id, index) => {
    if (item.boxes[index] === null){
      item.boxes[index] = true
    } else {
      item.boxes[index] = !item.boxes[index]
    }
    //console.log(item.boxes) 
    dispatch(updateBoxes(uid, id, item.boxes))
  }

  return (
    <div
      key={item.id}
      className="grid grid-cols-12 text-custom-textColor xl:text-2xl gap-x-1"
    >
      <div className="col-span-5 inline-flex text-xs md:text-base items-center">
        <p className="!text-left">{item.task}
        </p>
        <TrashIcon  className="navBtn mr-2 ml-auto h-12 w-12" onClick={() => dispatch(deleteTask(uid, item.id))} />
        {/* Add some sort of hover/show here */}
      </div>

      {item.boxes.map((box, index) => (
        <div className="w-full flex justify-center mt-2">
        <div
          key={index}
          onClick={() => handleBox(item.id, index)}
          className={` rounded-full border-2 border-custom-senaryAccent w-full sm:h-10 sm:w-10 flex justify-center items-center text-center gap-1 hover:border-custom-primaryAccent hover:cursor-pointer
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
        </div>
      ))}
    </div>
  )
}
export default connect()(Task);