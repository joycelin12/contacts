import React, { Component } from 'react';

//referencing https://codepen.io/bastianalbers/pen/PWBYvz

class Form extends Component {
	constructor(props) {

           super(props)

		this.initialState = {
			id:'',
			pic: '',
			first: '',
			last: '',
			phone: '',
			email: '',
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

	render() {
                const { id, pic, first, last, phone, email} = this.state;
		
		if (this.props.showModal) {
		 return (
			<div className ='popup'> 			
			 <div className ='popup_inner'>
			<form onSubmit={this.submitForm} >
			<table>
			<tr>
			<td>
	                <button onClick={this.cancelForm} >Cancel</button>
			</td>
			 <td></td>
			<td>
			<button type="submit" >Save</button>
			</td>
			</tr>
			<tr>
                        <td><div className="circle">Add Photo</div></td>
			<tr>
			<td  className="pop">
			<input 
			type= "hidden"
			name= "id"
			value= {Date.now()}/>
			<input 
			type= "text"
			name= "first"
			placeholder = "First Name"
			value= {first}
			onChange =  {this.handleChange} />
			</td>
			<td></td>
			</tr>
			<tr>
			<td  className="pop">
			<input 
			type= "text"
			name= "last"
			placeholder = "Last Name"
			value= {last}
			onChange =  {this.handleChange} />
			</td>
			<td></td> 
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
			placeholder = "+1 917 000 00 00"
			value= {phone}
			onChange =  {this.handleChange} />
			</td>
			<td></td> 
			</tr>
			<tr>
			<td  className="pop">
			<label>e-mail:</label>
			</td>
			<td  className="pop">
			<input 
			type= "email"
			name= "email"
			placeholder = "example@gmail.com"
			value= {email}
			onChange =  {this.handleChange} />
			</td>
			 <td></td>
			</tr>
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


export default Form;
