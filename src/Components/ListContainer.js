import React, { useState, useEffect } from 'react';
import '../CSS/List.css';
import Edit from './Edit.js'

function ListContainer({ acts, onDeleteAct, onUpdateAct }) {
    const [checkedActs, setCheckedActs] = useState([]);
    const [sortBy, setSortBy] = useState(null); 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [searchedActs, setSearchedActs] = useState(acts); 
    const [isEditing, setIsEditing] = useState(false); 
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        setSearchedActs(acts);
    }, [acts]);

    const handleCheckClick = (index) => {
        const isChecked = checkedActs.includes(index);
        if (isChecked) {
            setCheckedActs(checkedActs.filter(i => i !== index));
        } else {
            setCheckedActs([...checkedActs, index]);
        }
        onUpdateAct(index);
    }

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }

    const handleSearch = () => {
        const filtered = acts.filter(act =>
            act.actName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchedActs(filtered);
    }

    const handleReset = () => {
        setSearchTerm("");
        setSearchedActs(acts);
    }

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setIsEditing(true);
    };

    const handleUpdateActivity = (updatedActivity) => {
        const updatedActs = acts.map((act, index) => {
            if (index === editingIndex) {
                return updatedActivity;
            }
            return act;
        });
        onUpdateAct(updatedActs); // Update the array of activities
        setIsEditing(false);
        setEditingIndex(null);
        setSearchedActs(updatedActs); // Update searchedActs after activity update
    };

    const handleDeleteAct = (index) => {
        const updatedActs = acts.filter((_, i) => i !== index);
        onDeleteAct(index); // Delete the activity
        setSearchedActs(updatedActs); // Update searchedActs after activity deletion
    };

    const sortedSearchedActs = sortBy ? [...searchedActs].sort((a, b) => {
        if (sortBy === 'actName') {
            return a.actName.localeCompare(b.actName);
        } else if (sortBy === 'cName') {
            return a.cName.localeCompare(b.cName);
        }
        return 0;
    }) : searchedActs;

    return (
        <div>
            <div className='sort-card'>
                <label className='label'> Search for an Activity: </label>
                <input
                    className="sort-textbox"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="sort-button" onClick={handleSearch}>Search</button>
                <button className="sort-button" onClick={handleReset}>Reset</button>
                <label className='label'> Sort by: </label>
                <select
                    className="sort-select"
                    value={sortBy || ''}
                    onChange={handleSortChange}>
                    <option value="">Select</option>
                    <option value="actName">Activity</option>
                    <option value="cName">Course</option>
                </select>
            </div>

            {sortedSearchedActs.map((act, index) => (
                <div className={`list-card ${checkedActs.includes(index) ? 'checked' : ''}`} key={index}>
                    <h1 className="cName"> {act.cName} </h1>
                    <p> {act.actName} </p>
                    <div className="gray-line"> {/* gray line */} </div>
                    <p className="actDesc"> {act.actDesc} </p>
                    <button className="del-card-button" onClick={() => handleDeleteAct(index)}> 🗑️ Delete </button>
                    <button className="edit-card-button" onClick={() => handleEditClick(index)}> ✏️ Edit </button>
                    <button className="fin-card-button" onClick={() => handleCheckClick(index, act)}>
                        {checkedActs.includes(index) ? ' ✔️ Checked' : ' ⭕ Check'}
                    </button>
                </div>
            ))}
                {isEditing && (
                <Edit
                    activity={acts[editingIndex]}
                    onUpdate={handleUpdateActivity}
                />
            )}
        </div>
    )
}

export default ListContainer;