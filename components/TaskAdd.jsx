import React from "react"
import { connect } from "react-redux"
import { addTask } from "../redux/actions/tasks"

class TaskAdd extends React.Component{
    state = {
        task: "",
        boxes: [null, null, null, null, null, null, null]
    }   

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state)

    }

    render(){
    return(
        <form className="grid grid-cols-12 mt-20">
        <input
            name='task'
            value={this.task}
            className="bg-transparent mr-2 col-span-5 md:col-span-4 focus:outline-none xl:text-2xl"
            placeholder="Add New Task..."
            onChange={this.handleChange}
        />
        <div className="col-span-4">
            {/* fills in the grid */}
        </div>
        <button 
            className="border-2 border-custom-primaryAccent px-2 hover:bg-custom-primaryAccent rounded-full col-span-3 md:col-span-4 xl:text-2xl"
            onClick={this.submit}
            type="sumbit"
        >
            Create Task
        </button>
    </form>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task))
    }
}
export default connect(null, mapDispatchToProps)(TaskAdd) 