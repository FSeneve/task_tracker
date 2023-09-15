import { useState } from 'react';
import Tag from './Tag';
import './TaskForm.css';

const TaskForm = ({setTasks})=>{
    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    });

    const checkTag = (tag)=>{
        return taskData.tags.some(item => item === tag);
    }

    const selectedTag = (tag)=>{
        if(taskData.tags.some(item=>item===tag)){
            const filterTags = taskData.tags.filter(item=>item !== tag);

           setTaskData(prev => {
            return {...prev, tags: filterTags}
           });
        }else{
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setTaskData(prev=>{
            return {...prev, [name]: value };
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTasks(prev => {
            return [...prev, taskData];
        });

        setTaskData({
            task: '',
            status: 'todo',
            tags: []
        });
    }

    return (
        <header className="app_header">
          <form onSubmit={handleSubmit}>
            <input
            value={taskData.task}
            name='task' type='text' 
            className="task_input"
             placeholder="Enter your task"
             onChange={handleChange}
              />
            <div className="task_form_bottom_line">
                <div>
                    <Tag name='HTML' selectedTag={selectedTag} selected={checkTag('HTML')} />
                    <Tag name='PHP' selectedTag={selectedTag} selected={checkTag('PHP')} />
                    <Tag name='REACT' selectedTag={selectedTag} selected={checkTag('REACT')} />
                </div>

                <div>
                    <select value={taskData.status} name='status' onChange={handleChange} className="task_status">
                        <option value='todo'>To do</option>
                        <option value='doing'>Doing</option>
                        <option value='done'>Done</option>
                    </select>
                    <button type="submit" className="task_submit">+ Add Task</button>
                </div>
            </div>
          </form>
       </header>
    )
}

export default TaskForm;