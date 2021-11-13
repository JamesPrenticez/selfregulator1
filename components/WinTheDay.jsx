import React from "react"
import { connect } from "react-redux"
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import { fetchTasks } from "../redux/actions/tasks"

class WinTheDay extends React.Component{

componentDidMount(){
  this.props.fetchTasks()
}

componentDidUpdate(){
  this.props.fetchTasks()
}

render(){
  const { tasks } = this.props
  
  return (
      <main className="bg-custom-background fade grid grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto">
        {/* Tasks */}
        <section className="col-span-2 md:col-span-1">
          <div className="w-full">
            <div className="p-4 xl:mt-4 xl:ml-4 ">


              {/* Display Tasks */}
              {tasks.map((item) => (
                <Task 
                key={Math.random()}
                item={item}
                />
                ))}

              {/* Add Task */}
              <TaskAdd />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WinTheDay)