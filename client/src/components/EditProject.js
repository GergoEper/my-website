import React, { Component } from 'react'

export default class EditProject extends Component {
	render() {
		return (
			<div className={'editproject-container'}>
				<h1>Edit this project</h1>
				<form onSubmit={this.props.handleSubmit}>
					<label htmlFor="title"> </label>
					<input
						placeholder='Title'
						id="title"
						type="text"
						name="title"
						value={this.props.title}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="description"> </label>
					<input
						placeholder='Description'
						id="description"
						type="text"
						name="description"
						value={this.props.description}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="url"> </label>
					<input
						placeholder='Url'
						id="url"
						type="text"
						name="url"
						value={this.props.url}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="github"> </label>
					<input
						placeholder='Github'
						id="github"
						type="text"
						name="github"
						value={this.props.github}
						onChange={this.props.handleChange}
					/>
					<div className={'editproject-update-btn'}>
						<button type="submit">Update this project</button>
					</div>
				</form>
			</div>
		)
	}
}