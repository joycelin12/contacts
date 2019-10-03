import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {

  state = {
	     contacts : [
      /* {
	 pic: 'pic1',
	 name: 'name1',
	 email: 'asdlkajd@hotmail.com'      
       } ,
       {
	 pic: 'pic2',
	 name: 'name2',
	 email: 'aadakajd@hotmail.com'      
       },
       {
	 pic: 'pic3',
	 name: 'name3',
	 email: 'affakajd@hotmail.com'      
       }*/
     ]
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
 	
  render() {

     const {contacts} = this.state	  
     
     return (
       <div className="App">
	     <h1>My Contacts</h1>
	     <Table contactsData={contacts} removeContact={this.removeContact}/>
	     <Form handleSubmit={this.handleSubmit}/>

       </div>
          
     )
  }
}

export default App
