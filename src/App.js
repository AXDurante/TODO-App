import './CSS/App.css';
import { useState } from 'react';
import Forms from './Components/Forms.js';
import Header from './Components/Header.js';
import List from './Components/List.js';
import Footer from './Components/Footer.js';

function App() {
  const [acts, setActs] = useState([]);
  const [checkedActs, setCheckedActs] = useState([]); // Initialize checkedActs as an empty array

  const handleAddAct = (newAct) => {
    setActs([...acts, newAct]);
  };

  const handleDeleteAct = (index) => {
    const updatedActs = [...acts];
    updatedActs.splice(index, 1);
    setActs(updatedActs);
}

  const handleUpdateAct = (index) => {
    const isChecked = checkedActs.includes(index);
    if (isChecked) {
      setCheckedActs(checkedActs.filter((i) => i !== index));
    } else {
      setCheckedActs([...checkedActs, index]);
    }
  };

  return (
    <div className="App">
      <Header />
      <Forms onAddAct={handleAddAct} setCheckedActs={setCheckedActs} />
      <List
        acts={acts}
        deleteAct={handleDeleteAct}
        updateAct={handleUpdateAct}
        checkedActs={checkedActs}
      />
      <Footer acts={acts} checkedActs={checkedActs} />
    </div>
  );
}

export default App;