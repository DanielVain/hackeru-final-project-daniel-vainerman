import React from 'react';
import Form from '../common/Form/Form';
import Joi from 'joi-browser';
import PageHeader from '../common/pageHeader';
import { toast } from 'react-toastify';
import { addNewSong } from '../../services/songService';
import { Link, Navigate } from 'react-router-dom';

class CreateSong extends Form {
	state = {
		data: {
			title: '',
			description: '',
			link: '',
		},
		errors: {},
		isSongCreated: false,
	};

	schema = {
		title: Joi.string().min(2).max(256).required().label('Title'),
		artist: Joi.string().min(2).max(256).required().label('Artist'),
		description: Joi.string().min(2).max(1024).required().label('Description'),
		link: Joi.string()
			.min(11)
			.max(1024)
			.required()
			.uri()
			.allow('')
			.label('Link'),
	};

	doSubmit = async () => {
		try {
			const song = { ...this.state.data };
			if (!song.link) delete song.link;
			await addNewSong(song);
			toast.success('your new song was been created successfully');
			this.setState({ isSongCreated: true });
		} catch (error) {
			this.setState({ errors: { alt: error.message } });
		}
	};

	render() {
		const { isSongCreated } = this.state;
		if (isSongCreated) return <Navigate replace to="/my-songs" />;

		return (
			<div style={{ minHeight: '85vh' }} className="container-fluid">
				<div className="px-3">
					<PageHeader
						title="Add A Song"
						subTitle="Add Your Own Song To Our Website!"
					/>
					<div className="bg-primary p-2 m-2 shadow">
						<form
							onSubmit={this.handleSubmit}
							autoComplete="off"
							method="POST"
							className="p-2 text-light"
						>
							{this.renderInput('title', 'Title')}
							{this.renderInput('artist', 'Artist')}
							{this.renderTextarea('description', 'Description')}
							{this.renderInput(
								'link',
								'Link',
								"i.e. 'https://www.youtube.com/watch?v=...' (YouTube links only)"
							)}
							{this.renderButton('Add Song')}

							<Link to="/my-songs">
								<span className="btn btn-danger mt-1 col-12">Cancel</span>
							</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default CreateSong;
