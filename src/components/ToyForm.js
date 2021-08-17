import React, { useState } from "react";

function ToyForm({ handleSubmit, formData, setFormData }) {
  
  function handleChange(event) {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value,
      [event.target.image]: event.target.value,
    });
  }

  return (
    <div className="container">
      <form className="add-toy-form" >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;
