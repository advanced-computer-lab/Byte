import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import data from '../mock-data.json';
import * as ReactBootStrap from 'react-bootstrap';
import ReadOnlyRow from './readonlyrow';
import EditableRow from './EditableRow';

function UserInfo() {
  //console.log('User Infooo');
  const [data, setData] = useState([]);
  //const [userclicked, setUser] = useState([]);

  useEffect(() => {
    //console.log("Helloo");
    // axios
    //   .get('http://localhost:8000/user/getuser')
    //   .then((json) => setData(json.data));

    axios({
      url: 'http://localhost:8000/user/getuser',
      method: 'GET',
      headers: {authorization: localStorage.getItem('token')},
    }).then((json) => {console.log(json) ; setData(json.data);});
  }, []);
  //nothing is affected
  const [editFormData, seteditFormData] = useState({
    // firstname: '',
    // lastname: '',
    // passportnumber: '',
    // email_: '',
    // username: '',
    // address: '',
    // code: '',
    // password: '',
    // type: '',
  });
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldname = event.target.getAttribute('name');
    const fieldvalue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldname] = fieldvalue;
    seteditFormData(newFormData);
  };
  const [editContactId, setEditContactId] = useState(null);

  const handelEditFormSubmit = (event) => {
    event.preventDefault();
    const editedcontact = {
      _id: editContactId,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      passport_number: editFormData.passport_number,
      email: editFormData.email,
      // username: editFormData.username,
      // address: editFormData.address,
      // code: editFormData.code,
      // password: editFormData.password,
      // type: editFormData.type,
    };
    const newContacts = [...data];

    const index = data.findIndex((contact) => contact._id === editContactId);

    newContacts[index] = editedcontact;
    setData(newContacts);
    axios({
      method: 'post',
      url: 'http://localhost:8000/user/updateinfo',
      headers: {authorization: localStorage.getItem('token')},
      data: {
        first_name: editFormData.first_name,
        last_name: editFormData.last_name,
        passport_number: editFormData.passport_number,
        email: editFormData.email, // This is the body part
      },
    });
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formvalues = {
      first_name: contact.first_name,
      last_name: contact.last_name,
      passport_number: contact.passport_number,
      email: contact.email,

      // username: contact.username,
      // address: contact.address,
      // code: contact.code,
      // password: contact.password,
      // type: contact.type,
    };
    seteditFormData(formvalues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <div>
      <div className='app-container'>
        <form onSubmit={handelEditFormSubmit}>
          <ReactBootStrap.Table striped bordered hover>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Passportnumber</th>
              <th>Email</th>
              {/* <th>Username</th>
              <th>Address</th>
              <th>Code</th>
              <th>Password</th>
              <th>Type</th>
              <th>Actions</th> */}
            </tr>
            <tbody>
              {data.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </ReactBootStrap.Table>
        </form>
      </div>
    </div>
  );
}

export default UserInfo;
