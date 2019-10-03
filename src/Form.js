import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {

           super(props)

		this.initialState = {
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
		this.setState(this.initialState);
	}

	render() {
              const { pic, first, last, phone, email} = this.state;

		return(
			<form onSubmit={this.submitForm} >
			<table>
			<tr>
			<td>
			Cancel
			</td>
			<td>
			<button type="submit" >Save</button>
			</td>
			</tr>
			<tr>
                        <td>pic</td>
			<tr>
			<td>
			<input 
			type= "text"
			name= "first"
			placeholder = "First Name"
			value= {first}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			<tr>
			<td>
			<input 
			type= "text"
			name= "last"
			placeholder = "Last Name"
			value= {last}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			</tr>
			<tr>
			<td>
			<label>phone:</label>
			</td>
			<td>
			<input 
			type= "text"
			name= "phone"
			placeholder = "+1 917 000 00 00"
			value= {phone}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			<tr>
			<td>
			<label>e-mail:</label>
			</td>
			<td>
			<input 
			type= "email"
			name= "email"
			placeholder = "example@gmail.com"
			value= {email}
			onChange =  {this.handleChange} />
			</td>
			</tr>
			</table>
			</form>

		)
	}
}

export default Form;
