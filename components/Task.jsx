
function Task({item, currentDayIndex, daysThisWeek}) {
  return (
    <div
      key={item.id}
      className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center xl:text-2xl gap-x-1"
    >
      <p className="col-span-5 !text-left text-xs md:text-base">{item.task}</p>

      {item.boxes.map((box, index) => (
        <div
        key={index}
        className={`mt-2 rounded-full border md:border-2 border-custom-tertiaryAccent h-6 w-6 md:h-10 md:w-10 flex justify-center items-center text-center gap-1 hover:border-custom-primaryAccent hover:cursor-pointer
        ${box === true ? "bg-green-600 border-green-600" : box === null ? "" : !box ? "bg-red-600 border-red-600" : ""}
        ${currentDayIndex === index && "text-custom-primaryAccent"}
        
        `}
        >
          {console.log(currentDayIndex)}
          {console.log(index)}
          <p className="text-xs md:text-base font-light md:font-medium font-kanit">
            {box === true ? "Yes" : box === null ? daysThisWeek[index] : !box ? "No" : ""}
            {/* {daysThisWeek[index]} */}
            {/* {JSON.stringify(box)} */}
          </p>
        </div>
      ))}
    </div>

);
}
export default Task;