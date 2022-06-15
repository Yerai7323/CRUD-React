import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate, Link  } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post("https://62a83937a89585c1770f25c5.mockapi.io/fakeData", {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });

    resetForm();
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setCheckbox(false);
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
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
      <Link to='/read'>
        <Button>
          Go to list
        </Button>
      </Link>
    </Form>
  );
};

export default Create;
