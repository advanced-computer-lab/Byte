import React from "react"

const ReadOnlyRow= ({contact , handleEditClick}) =>{
    return(

     <tr>
           <td>{contact.first_name} </td>
           <td>{contact.last_name} </td>
           <td>{contact.passport_number} </td>
           <td>{contact.email} </td>
           <td>{contact.username} </td>
           <td>{contact.address} </td>
           <td>{contact.code} </td>
           <td>{contact.password} </td>
           <td>{contact.type} </td>
           <td><button type="button" onClick={(event) => handleEditClick(event,contact) }>Update Info</button> </td>
         </tr> 


    )
}

export default ReadOnlyRow 