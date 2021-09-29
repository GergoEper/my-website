import React, { Component } from 'react'
import axios from 'axios';
import EditProject from './EditProject';

export default class ProjectDetails extends Component {

	state = {
		project: null,
		title: '',
		description: '',
		url: '',
		github: '',
		error: null,
		editForm: false
	}

	getData = () => {
		const id = this.props.match.params.id;
		axios.get(`/api/projects/${id}`)
			.then(response => {
				// console.log(response.data)
				this.setState({
					project: response.data,
					title: response.data.title,
					description: response.data.description,
					url: response.data.url,
					github: response.data.github
				})
			})
			.catch(err => {
				console.log(err);
				if (err.response.status === 404) {
					this.setState({
						error: 'Not Found 🤷‍♀️ 🤷‍♂️'
					})
				}
			})
	}

	deleteProject = () => {
		// delete the project in the database
		axios.delete(`/api/projects/${this.state.project._id}`)
			.then(() => {
				// redirect to the projects list
				// redirect using react router
				this.props.history.push('/projects');
			})
			.catch(err => console.log(err))
	}

	componentDidMount() {
		this.getData();
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	toggleEditForm = () => {
		this.setState(state => ({
			editForm: !state.editForm
		}))
	}

	handleSubmit = e => {
		e.preventDefault();
		const { title, description, url, github } = this.state;
		axios.put(`/api/projects/${this.state.project._id}`, {
			title,
			description,
			url,
			github
		})
			.then(response => {
				this.setState({
					project: response.data,
					title: response.data.title,
					description: response.data.description,
					url: response.data.url,
					github: response.data.github,
					editForm: false
				})
			})
			.catch(err => console.log(err))
	}

	render() {
		if (this.state.error) return <h2>{this.state.error}</h2>
		if (!this.state.project) return <></>
		console.log(this.state)
		return (
			<div className={'project-details'}>
				<h1>{this.state.project.title}</h1>
				<p>Description: {this.state.project.description}</p>
				<p>Url: {this.state.project.url}</p>
				<p>Github: {this.state.project.github}</p>
				<div className={'project-details-btn'}>
					<button onClick={this.deleteProject}>Delete this project 🗑</button>
					<button onClick={this.toggleEditForm}>Show Edit form</button>
				</div>
				{this.state.editForm && (
					<EditProject
						// title={this.state.title}
						// description={this.state.description}
						{...this.state}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
					/>
				)}
			</div>
		)
	}
}