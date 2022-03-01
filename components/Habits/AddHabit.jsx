import React, {useState} from "react"
import { connect } from "react-redux";
import { setHabits } from "../../redux/habits/actions"

function AddHabit(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")

    handleChange = (e) => {
        setTitle(e.target.value)
        setDescription(e.target.value)
        setColor(e.target.value)
    }

    submit = (e) => {
        const data = {
            title: title,
            description: description,
            color: color,
        }
        e.preventDefault()
        fetch("/api/habits", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            this.props.dispatch(setHabits())
        })
        this.setState({title: "", description: "", color: ""})
    }

    return(
        <form className="flex justify-between items-center h-20 bg-neutral-700">
            <div>
            <input
                name='title'
                value={title}
                className="bg-transparent mr-2 col-span-5 md:col-span-4 focus:outline-none text-xs md:text-4xl p-4"
                placeholder="Add New Habit..."
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <button 
                className="h-full w-64 hover:bg-neutral-400 text-xs md:text-base bg-neutral-600 p-4"
                onClick={this.submit}
                type="sumbit"
            >
                Create Habit
            </button>

            <button>

            </button>
        </form>
    )
}

export default connect()(AddHabit) 


{/* <div className="flex items-center p-4 bg-neutral-700 space-x-4">
<div className="h-16 w-16 rounded-full bg-neutral-900"></div>
<div className='h-16'>
  <h1 className="text-3xl" style={{color: habit.color}}>{habit.title}</h1>
  <h2 className="text-xl text-neutral-400">{habit.description}</h2>
</div>
</div> */}