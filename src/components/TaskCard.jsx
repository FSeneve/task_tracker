import './TaskCard.css';
import Tag from './Tag';
import deleteIcon from '../assets/delete.png';

const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'>Sample text</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                <Tag name='HTML' />
                <Tag name='REACT' />
                <Tag name='PHP' />
            </div>
            <div className='task_delete'>
                <img className='delete_icon' src={deleteIcon} />
            </div>
        </div>
    </article>
  )
}

export default TaskCard;