import React, { Component } from 'react'

const TableBody = props => {  

      const rows = props.contactsData.map((row, index) => {	

      return(
            <tr key={index}>
            <td ><div className="circle2">{row.pic}</div></td>
            <tr>
            <td>{row.first} {row.last}</td>
            </tr>
            <tr>
            <td>{row.email}</td>
	    </tr>
	     <td>
              <img src="./edit.png" onClick={() =>props.editContact(index,row)} alt="Edit"/>
	      </td>    
	    <td>
	      <img src="./cross.png" onClick={() => props.removeContact(index)} alt="Delete"/>
	      </td>  
          </tr>
         )
       })

	return<tbody>{rows}</tbody>
}


class Table extends Component {

   render() {
	  const {contactsData, removeContact, editContact} = this.props
          
	   return (
		  <table>
		  <TableBody contactsData={contactsData} removeContact={removeContact} editContact={editContact}  />
		  </table>
          	  )
   }
}

export default Table
