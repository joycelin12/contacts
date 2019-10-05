import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'
import EditForm from './EditForm'



//referencing from https://stackoverflow.com/questions/53921667/reactjs-component-structure-form-inside-modal

class App extends Component {

  state = {
	   showEdit: false,
	   id: null,
	   showModal: false,
	  contacts : [
        { id: 1, pic: "AM", first: "Alex", last: "Moor", phone:"918 012 1212", email:"email@example.com"},
	{ id: 2, pic: "BC", first: "Brendon", last: "Cole", phone:"911 011 1010", email:"email@example.com"},
        { id: 3, pic: "SR", first: "Samanta", last: "Rose", phone:"918 012 1333", email:"email@example.com"}

            ]
	  }
    
  addContacts = (event) => {
	  	this.setState({showModal: true,
		  showEdit: false
   })
                
  }

  closeContact = (event) => {
		this.setState({showModal: false,
		showEdit: false});
  }	

  removeContact = index => {
           const { contacts } = this.state

	    this.setState({
		    contacts: contacts.filter((contact, i) => {
                          return i !== index
		    }),
   
	    })
    }

  handleSubmit = contact => {
       this.setState({ contacts: [...this.state.contacts, contact]})
  }

  editContact = (index, row) => {
         this.setState({
		showEdit: true,
		id: row.id,
                pic: row.pic,
                first: row.first,
  		last: row.last,
                phone: row.phone,
                email: row.email})	
  }
  
  updateHandle = (contact) => {
         this.setState({
		    contacts :this.state.contacts.map(index => {
                           if(index.id === this.state.id) {  
							  
				   index['pic'] = contact.pic;
				   index['first'] = contact.first;
				   index['last'] = contact.last;
				   index['phone'] = contact.phone;
                                   index['email'] = contact.email;
				   return index;
                               
			   }
			    return index;
		    })

            
	    })


	   this.setState({
            showEdit: false
	   })
	  	  	  
  }
  
 	
  render() {

     const {contacts} = this.state	  
     
     return (
       <div className="container">
	     
	     <table>
	     <tbody>
	     <tr><td>
	     <h1>My Contacts</h1></td>
	     <td>
	     <h2 onClick={this.addContacts}>+</h2></td>
	     </tr>
	     </tbody>
	     </table>
	     <hr />
	     <Table contactsData={contacts} removeContact={this.removeContact} editContact = {this.editContact}/>
	     <Form showModal={this.state.showModal} closeContact={this.closeContact} handleSubmit={this.handleSubmit} /> 
             <EditForm showEdit={this.state} editContact = {this.editContact} closeContact={this.closeContact} updateHandle={this.updateHandle} /> 

	  
	       </div>
          
     )
  }
}



export default App
