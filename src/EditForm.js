import React, { Component } from 'react';

//referencing https://codepen.io/bastianalbers/pen/PWBYvz
//referencing https://stackoverflow.com/questions/53921667/reactjs-component-structure-form-inside-modal for the popup
//referencing https://stackoverflow.com/questions/51002481/images-not-loading-when-deploying-to-github-pages for displaying images
// referencing this https://www.freecodecamp.org/news/crud-using-react-41d047224e26/ to do the update

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

		console.log("name" + name);
		console.log("value" + value);
		
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

	EditSubmitForm = (event) => {
           
            event.preventDefault();
	    this.props.updateHandle(this.state);
	    this.props.closeContact();
	    this.setState(this.initialState);
	
            	
	}	

	render() {

		 const {showEdit, id, pic, first, last, phone, email} = this.props.showEdit;
	
		if (showEdit) {
			 return (
			<div className ='popup'> 
			 <div className ='popup_inner'>
		        <form onSubmit={this.EditSubmitForm.bind(this)} >
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
			defaultValue= {first}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			<tr>
			<td  className="pop">
			<input 
			type= "text"
			name= "last"
		        defaultValue= {last}
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
		        defaultValue = {phone}
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
		        defaultValue = {email}
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

