import '../CSS/Forms.css';
import { useState } from 'react';

function Forms({ onAddAct, setCheckedActs }) {
    const [cName, setCName] = useState("");
    const [actName, setActName] = useState("");
    const [actDesc, setActDesc] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!cName || !actName || !actDesc) return; //checks if there is an empty field
        const newAct = { cName, actName, actDesc };
        onAddAct(newAct);
        setCName("");
        setActName("");
        setActDesc("");
        setCheckedActs([]); // Reset checked status for all tasks
    }

    return (
        <div>
            <div className="forms-card">
                <form onSubmit={handleSubmit}>
                    <label className="label"> 📝 Enter Course Name: </label> <br />
                    <input
                        className="forms-textbox"
                        id="cName"
                        type="text"
                        name="cName"
                        required
                        value={cName}
                        onChange={(e) => setCName(e.target.value)}
                    /> <br />
                    <label className="label"> 📝 Enter Activity Name: </label> <br />
                    <input
                        className="forms-textbox"
                        id="actName"
                        type="text"
                        name="actName"
                        required
                        value={actName}
                        onChange={(e) => setActName(e.target.value)}
                    /> <br />
                    <label className="label"> 📝 Enter Activity Description: </label> <br />
                    <textarea
                        className="forms-textarea"
                        id="actDesc"
                        type="textarea"
                        name="cDesc"
                        value={actDesc}
                        onChange={(e) => setActDesc(e.target.value)}
                    /> <br />
                    <input
                        type="submit"
                        value="List it down!"
                        className="submit-button" />
                </form>
            </div>

        </div>
    );
}

export default Forms;