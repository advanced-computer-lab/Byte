import React,{useState,useEffect,Fragment} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './header';
import ReservedFlights from './ReservedFlights';
import MyFlights from './myFlights';
import Home from './home';
import Flights from './a_allFlights';
import AdminHome from './admin';
import CreateFlights from './a_createFlight';
import UserHome from './userhomepage';
import Userupdate from './userupdating';
import data from "./mock-data.json";
import ReadOnlyRow from './components/readonlyrow';
import EditableRow from './components/EditableRow';


const App = () => {
  const[contacts,setContacts]= useState(data);

  const[editFormData, seteditFormData]= useState({
    first_name:"",
    last_name:"",
    passport_number:"",
    email:"",
    username:"",
    address:"",
    code:"",
    password:"",
    type:""
  })
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldname=event.target.getAttribute("name");
    const fieldvalue=event.target.value;
    const newFormData ={...editFormData};
    newFormData[fieldname]=fieldvalue;
    seteditFormData(newFormData);
  } 
  const[editContactId, setEditContactId]= useState(null);



  const handelEditFormSubmit = (event) => {

    event.preventDefault();
    const editedcontact= {
      _id:editContactId,
      first_name:editFormData.first_name,
      last_name:editFormData.last_name,
      passport_number:editFormData.passport_number,
      email:editFormData.email,
      username:editFormData.username,
      address:editFormData.address,
      code:editFormData.code,
      password:editFormData.password,
      type:editFormData.type
    }
    const newContacts = [...contacts];


    const index =contacts.findIndex((contact)=> contact._id ===editContactId);

    newContacts[index]=editedcontact;
    setContacts(newContacts);
    setEditContactId(null);
  }
  const handleEditClick  = (event,contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);
    const formvalues={
      first_name:contact.first_name,
      last_name:contact.last_name,
      passport_number:contact.passport_number,
      email:contact.email,
      username:contact.username,
      address:contact.address,
      code:contact.code,
      password:contact.password,
      type:contact.type,

    }
   seteditFormData(formvalues);
  } 


  const handleCancelClick= () => {
    setEditContactId(null);
  }

  return (
<div>
    <div className="app-container">
      <form onSubmit={handelEditFormSubmit}> 
      <table>
       <thread>
         <th>FirstName</th>
         <th>LastName</th>
         <th>Passportnumber</th>
         <th>Email</th>
         <th>Username</th>
         <th>Address</th>
         <th>Code</th>
         <th>Password</th>
         <th>Type</th>
         <th>Actions</th>
       </thread>
       <tbody>
         {contacts.map((contact)=>(
        <Fragment>
         { editContactId === contact.id ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} /> :<ReadOnlyRow contact={contact} handleEditClick={handleEditClick}/>}
        
         </Fragment>
         ))}
       </tbody>
      </table>
</form>
     </div>
    
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserved' element={<ReservedFlights />} />
        <Route path='/myflights' element={<MyFlights />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/list' element={<Flights />} />
        <Route path='/admin/create' element={<CreateFlights />} />
        <Route path='/admin/search' element={<Home />} />
        <Route path='/user/home/:id' element={<UserHome />} />
        <Route path='/user/update/:id' element={<Userupdate />} />
      </Routes>
    </div>
 </div> 
  );
};

export default App;
