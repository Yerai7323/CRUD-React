import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    let check = false;
    localStorage.getItem("checkbox") === "true"
      ? (check = true)
      : (check = false);

    setID(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setCheckbox(check);
  }, []);

  const updateData = () => {
    axios
      .put(`https://62a83937a89585c1770f25c5.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        navigate("/read")
      });
  };

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={updateData}>
        Update
      </Button>
      <Link to="/read">
        <Button>Go back to list</Button>
      </Link>
    </Form>
  );
};

export default Update;
