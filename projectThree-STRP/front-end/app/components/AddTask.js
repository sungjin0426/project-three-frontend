import React from 'react';
import {Link} from 'react-router';

const AddStyle = {
  border: '1px solid navy'
}

function AddTask(props) {
  return (
    <div>
      <h1>Hello World from STRPers</h1>
      <br/>
      <h2>Add Task</h2>
      <div style={AddStyle}>
        <form onSubmit={props.onSubmitTask}>
          <div>
            <p><b>My Tasks: </b><br/><input type='text' name='mytask'  onChange={props.onAddTaskName}/></p>
            Today's Date: <input type='date' name='date' className='date'  onChange={props.onAddDate}/>
            <br/>
            <br/>
            Location: <input type='text' name='' className='location' onChange={props.onAddLocation}/>
            <br/>
            <br/>
            Task Category:
            <br/>
            <select name="taskCategory" onChange={props.onAddCategory}>
              <option value="personal">Personal</option>
              <option value="school">School</option>
              <option value="work">Work</option>
              <option value="others">Others</option>
            </select>
            <br/>
            <br/>
            Time:
            <br/>
            <input type='time' onChange={props.onAddTime}/>
            <br/>
            <br/>
            Detail:
            <br/>
            <textarea name='task-description'
                      maxLength='140'
                      placeholder='(Detail description...)'
                      onChange={props.onAddDetail}/>
          </div>
          <br/>
          <div>
            <Link to='listTasks'>
              <button className='task-add-btn' type='submit'>Add Task(+)</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask;
