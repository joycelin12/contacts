import React, { Component } from 'react';

//referencing https://codepen.io/bastianalbers/pen/PWBYvz

class EditForm extends Component {
	
	constructor(props) {

           super(props)
		
					
		this.initialState = {
			showEdit: false,
			id: '',			
			pic: '',
			first: '',
			last: '',
			phone: '',
			email: ''
			}
			

		this.state = this.initialState
	
	}

	handleChange = event => {
		const { name, value } = event.target

		this.setState({
                   [name] : value,
		})
	}

	submitForm = (event) => {
		event.preventDefault();
		this.props.handleSubmit(this.state);
		this.props.closeContact();
		this.setState(this.initialState);
	}

	cancelForm = (event) => {
		event.preventDefault();
		this.props.closeContact();
	}

	EditHandleForm = (event) => {

            event.preventDefault();
            this.setState({
		    contacts :this.state.contacts.map(index => {
                           if(index.id === this.state.id) {  

				   console.log('pic' + event.target.pic.value );
			   	    console.log('first' + event.target.first.value );
				      console.log('last' + event.target.last.value );
				      console.log('phone' + event.target.phone.value );
				      console.log('email' + event.target.email.value ); 	  

				   index['pic'] = event.target.pic.value;
				   index['first'] = event.target.first.value;
				   index['last'] = event.target.last.value;
				   index['phone'] = event.target.phone.value;
                                   index['email'] = event.target.phone.value;
				   return index;
                               
			   }
			    return index;
		    })

            
	    })


	  this.setState({
            showEdit: false
	   })
	   this.props.closeContact();
	   this.setState(this.initialState);
	
	}	

	render() {

		 const {showEdit, id, pic, first, last, phone, email} = this.props.showEdit;
		 console.log(showEdit.showEdit + " showedit only");
		  console.log(showEdit.id + " id only");	                
		if (showEdit) {
	/*	  console.log(this.props.showEdit.showEdit +"edit");
		  console.log(this.props.showEdit.contact.first +"first");
		  console.log(this.props.showEdit.contact.last +"last");
		  console.log(this.props.showEdit.contact.phone +"phone");
		  console.log(this.props.showEdit.contact.email +"contact");
			
		
		 console.log(this.props.first + "testing first");*/	
		 return (
			<div className ='popup'> 
			 <div className ='popup_inner'>
		        <form onSubmit={this.EditHandleForm.bind(this)} >
			<table>
			<tbody> 
			<tr>
			<td>
			<button onClick={this.cancelForm} >Cancel</button>
			</td>
			<td></td> 
			<td>
			<button type="submit" >Update</button>
			</td>
			</tr>
			<tr>
                        <td><div className="circle">Add Photo</div></td>
			<tr>
			<td  className="pop">
			<input 
			type= "hidden"
			name= "id"
			value= {id}/>
			<input 
			type= "text"
			name= "first"
			value= {first}
			 onChange =  {this.handleChange} />
			</td>
			</tr>
			<tr>
			<td  className="pop">
			<input 
			type= "text"
			name= "last"
		        value= {last}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			</tr>
			<tr>
			<td  className="pop">
			<label>phone:</label>
			</td>
			<td  className="pop">
			<input 
			type= "text"
			name= "phone"
		        value= {phone}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			<tr>
			<td  className="pop">
			<label>e-mail:</label>
			</td>
			<td  className="pop">
			<input 
			type= "email"
			name= "email"
		        value= {email}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			 </tbody>
			</table>
			</form>

			 </div>			
			 </div>
		 )
		} else {
                   return null;
		}

	}
  }


export default EditForm;

