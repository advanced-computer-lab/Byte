import React from "react"

const EditableRow= ({editFormData , handleEditFormChange, handleCancelClick}) =>{
    return(

<tr>
<td>
    <input type="text" required="required" placeholder="Enter your first name.." name="firstname" value={editFormData.firstname} onChange={handleEditFormChange}></input>
</td>
<td>
<input type="text" required="required" placeholder="Enter your last name.." name="lastname" value={editFormData.lastname} onChange={handleEditFormChange}></input>
</td>
<td>
<input type="text" required="required" placeholder="Enter your passport number.." name="passportnumber" value={editFormData.passportnumber} onChange={handleEditFormChange}></input>
</td>
<td>
<input type="email" required="required" placeholder="Enter your email.." name="email" value={editFormData.email} onChange={handleEditFormChange}></input>
</td>
<td>
<input type="text" required="required" placeholder="Enter your username.." name="username" value={editFormData.username} onChange={handleEditFormChange}></input>
</td>
<td>
<input type="text" required="required" placeholder="Enter your address.." name="address" value={editFormData.address} onChange={handleEditFormChange}></input>
</td>
<td>
<input type="text" required="required" placeholder="Enter your code.." name="code" value={editFormData.code} onChange={handleEditFormChange}></input>
</td>
<td>
<input type="password" required="required" placeholder="Enter your password.." name="password" value={editFormData.password} onChange={handleEditFormChange}></input>
</td>

<td>
    <button type="submit">Save</button>
    <button type="button">Cancel</button>
</td>
</tr>


    )
}

export default EditableRow 