import React, { Component } from 'react'

const TableBody = props => {  

      const rows = props.contactsData.map((row, index) => {	

      return(
            <tr key={index}>
            <td>{row.pic}</td>
            <tr>
            <td>{row.first} {row.last}</td>
            </tr>
            <tr>
            <td>{row.email}</td>
	    </tr>
	    <td>
              <button onClick={() => props.removeContact(index)}>X</button>
	      </td>  
          </tr>
         )
       })

	return<tbody>{rows}</tbody>
}


class Table extends Component {

   render() {
	   const {contactsData, removeContact} = this.props

          return (
		  <table>
		  <TableBody contactsData={contactsData} removeContact={removeContact} />
		  </table>
          	  )
   }
}

export default Table
