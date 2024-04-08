import React, { useState } from 'react';
import '../CSS/Edit.css'

function Edit({ activity, onUpdate }) {
    const [editedActivity, setEditedActivity] = useState({ ...activity });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedActivity({ ...editedActivity, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(editedActivity); // Pass the edited activity back to the parent component
    };

    return (
        <div>
            <div className="edit-card"> 
                <h2>Edit Activity</h2>
                <form onSubmit={handleSubmit}>
                    <label className="edit-label">Course Name:</label> <br/>
                    <input
                        className="edit-textbox"
                        type="text"
                        name="cName"
                        value={editedActivity.cName}
                        onChange={handleChange}
                    /> <br/>
                    <label className="edit-label">Activity Name:</label> <br/>
                    <input
                        className="edit-textbox"
                        type="text"
                        name="actName"
                        value={editedActivity.actName}
                        onChange={handleChange}
                    /> <br/>
                    <label className="edit-label">Activity Description:</label> <br/>
                    <textarea
                        className="edit-textarea"
                        name="actDesc"
                        value={editedActivity.actDesc}
                        onChange={handleChange}
                    /> <br/>
                    <button className="submit-button" type="submit">Update</button>
                </form>
            </div> 
        </div>
    );
}

export default Edit;