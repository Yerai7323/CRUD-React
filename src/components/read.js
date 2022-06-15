import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://62a83937a89585c1770f25c5.mockapi.io/fakeData/")
      .then((resp) => {
        setAPIData(resp.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checkbox", checkbox);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62a83937a89585c1770f25c5.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get("https://62a83937a89585c1770f25c5.mockapi.io/fakeData/")
      .then((resp) => {
        setAPIData(resp.data);
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Link to="/create">
        <Button>Add</Button>
      </Link>
    </div>
  );
};

export default Read;
