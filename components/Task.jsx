function Task({item}) {
  return (
    <div
      key={item.id}
      className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center xl:text-2xl gap-x-1"
    >
      <p className="col-span-5 !text-left">{item.task}</p>

      {item.boxes.map((box) => (
        <div
          key={Math.random()}
          className={`mt-2 rounded-sm ${box === true ? "bg-green-600" : box === null ? "bg-yellow-600" : !box ? "bg-red-600" : ""}`}
        >
          <p className="text-sm xl:text-2xl text-black">
            {JSON.stringify(box)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Task;