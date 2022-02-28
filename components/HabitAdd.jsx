import React from "react"
import { connect } from "react-redux";
import { setHabits } from "../redux/habits/action"

class HabitAdd extends React.Component{
    state = {
        title: "",
        description: "",
        color: "",
    }   

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        fetch("/api/habits", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
        }).then(() => {
            this.props.dispatch(setHabits())
        })
        this.setState({title: "", description: "", color: ""})
    }

    render(){
        return(
            <form className="grid grid-cols-12 mt-4 h-20 items-center">
            <input
                name='title'
                value={this.state.title}
                className="bg-transparent mr-2 col-span-5 md:col-span-4 focus:outline-none text-xs md:text-base"
                placeholder="Add New Habit..."
                onChange={this.handleChange}
            />
            <button 
                className=" h-1/2 col-start-11 col-span-2 border-2 border-custom-primaryAccent px-2 hover:bg-custom-primaryAccent rounded-full text-xs md:text-base"
                onClick={this.submit}
                type="sumbit"
            >
                Create Habit
            </button>
        </form>
        )
    }
}

export default connect()(HabitAdd) 