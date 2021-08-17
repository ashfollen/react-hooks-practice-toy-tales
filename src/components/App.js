import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const toyAPI = "http://localhost:3001/toys"


function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });
  
  useEffect(() => {
    fetch(toyAPI) 
    .then((resp) => resp.json())
    .then(data => setToys(data))
  }, [])

  function handleSubmit(event) {
    event.preventDefault();
    fetch(toyAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
