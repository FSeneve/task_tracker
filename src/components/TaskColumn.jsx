import TaskCard from './TaskCard';
import './TaskColumn.css';

const TaskColumn = ({title, icon})=>{
    return(
        <section className="task_column">
         <h2 className='task_column_heading'>
            <img className='task_column_icon' src={icon} alt='To do images' /> {title}
          </h2>
          <TaskCard />
        </section>
    )
}

export default TaskColumn;