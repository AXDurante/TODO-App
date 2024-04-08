import '../CSS/List.css';
import ListContainer from './ListContainer.js';

function List({ acts, deleteAct, updateAct }) {
    return (
        <div> 
            <ListContainer 
                acts={acts} 
                onDeleteAct={deleteAct} 
                onUpdateAct={updateAct}/>
        </div>
    )
}

export default List;