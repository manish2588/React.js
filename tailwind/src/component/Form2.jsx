import React, { useState } from 'react';

function Form2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hobby: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const hobbies = checked
          ? [...prev.hobby, value]
          : prev.hobby.filter((hobby) => hobby !== value);
        return { ...prev, hobby: hobbies };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <section id="form" className="m-20">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="cricket"
                name="hobby"
                value="cricket"
                checked={formData.hobby.includes("cricket")}
                onChange={handleChange}
              />
              Cricket
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                id="football"
                name="hobby"
                value="football"
                checked={formData.hobby.includes("football")}
                onChange={handleChange}
              />
              Football
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form2;
