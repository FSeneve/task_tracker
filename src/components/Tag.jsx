import './Tag.css';

const Tag = ({name, selectedTag, selected})=>{
    const tagStyle = {
        HTML: {backgroundColor: '#fda821'},
        PHP: {backgroundColor: '#15d4c8'},
        REACT: {backgroundColor: '#ffd12c'},
        default: {backgroundColor: '#f9f9f9'},
    };
    return (
        <button style={selected ? tagStyle[name] : tagStyle.default} type='button' onClick={()=>selectedTag(name)} className="tag">{name}</button>
    )
}

export default Tag;