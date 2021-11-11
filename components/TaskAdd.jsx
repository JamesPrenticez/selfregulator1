import { useRecoilState, useSetRecoilState } from 'recoil';
import { addTaskState, tasksState } from '../atoms/task';

function TaskAdd(){
    const [name, setName] = useRecoilState(addTaskState)
    const setTasks = useSetRecoilState(tasksState)


    function handleChange(e){
        setName(e.target.value)
        console.log(name)
    }

    function submit(e){
        e.preventDefault()
        setTasks(oldTasks => {
            const newTasks = [
                ...oldTasks,
                {
                 task: name,
                 boxes: [null, null, null, null, null, null, null]
                }
            ]
            return newTasks
        })
        setName("")
    }

    return(
        <form className="grid grid-cols-12 mt-20">
        <input
            name='name'
            value={name}
            className="bg-transparent mr-2 col-span-5 md:col-span-4 focus:outline-none xl:text-2xl"
            placeholder="Add New Task..."
            onChange={handleChange}
        />
        <div className="col-span-4">
            {/* fills in the grid */}
        </div>
        <button 
            className="border-2 border-custom-primaryAccent px-2 hover:bg-custom-primaryAccent rounded-full col-span-3 md:col-span-4 xl:text-2xl"
            onClick={submit}
            type="sumbit"
        >
            Create Task
        </button>
    </form>
    )
}
export default (TaskAdd) 