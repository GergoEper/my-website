import React, { Component } from 'react'
import axios from 'axios';

export default class AddProject extends Component {

	state = {
		title: '',
		description: '',
		url: '',
		github: ''
	}

	handleSubmit = event => {
		event.preventDefault();
		// make a post request to the server
		axios.post('/api/projects', {
			title: this.state.title,
			description: this.state.description,
			url: this.state.url,
			github: this.state.github
		})
			.then(() => {
				this.setState({
					title: '',
					description: '',
					url: '',
					github: ''
				})
				// trigger getData() in Projects.js to retrieve the current list
				// of projects from the server
				this.props.getData();
			})
			.catch(err => console.log(err))
	}
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	}
	render() {
		return (
			<form className={'add-project'} onSubmit={this.handleSubmit}>
				<label htmlFor="title"> </label>
				<input className={'add-project-label'}
					placeholder='Title'
					type="text"
					id="title"
					name="title"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				<label htmlFor="description"> </label>
				<input className={'add-project-label'}
					placeholder='Description'
					type="text"
					id="description"
					name="description"
					value={this.state.description}
					onChange={this.handleChange}
				/>
				<label htmlFor="url"> </label>
				<input className={'add-project-label'}
					placeholder='URL'
					type="text"
					id="url"
					name="url"
					value={this.state.url}
					onChange={this.handleChange}
				/>
				<label htmlFor="github"> </label>
				<input className={'add-project-label'}
					placeholder='Github'
					type="text"
					id="github"
					name="github"
					value={this.state.github}
					onChange={this.handleChange}
				/>
				<div className={'add-project-btn'}>
					<button type="submit">Add this project</button>
				</div>
			</form>
		)
	}
}