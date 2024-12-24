import axios from "axios";
import { useReducer } from "react";

function Form_2() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
  });
  function reducer(state, action) {
    switch (action.type) {
      case "HANDLE_INPUT":
        return { ...state, [action.name]: action.value };
      case "SUBMIT":
        return { ...state };
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "HANDLE_INPUT",
      name,
      value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT",
    });

    try {
      const res = axios.post("url", state);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          value={state.name}
          placeholder="Enter name"
          onChange={handleChange}
        />

        <label htmlFor="email"> Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={state.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}

export default Form_2;
