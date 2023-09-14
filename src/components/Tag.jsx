import './Tag.css';

const Tag = ({name, selectedTag})=>{
    return (
        <button type='button' onClick={()=>selectedTag(name)} className="tag">{name}</button>
    )
}

export default Tag;