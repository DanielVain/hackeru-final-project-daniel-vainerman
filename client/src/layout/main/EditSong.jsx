import React from 'react';
import Form from '../common/Form/Form';
import Joi from 'joi-browser';
import PageHeader from '../common/pageHeader';
import { toast } from 'react-toastify';
import { editSong, getSong } from '../../services/songService';
import { Link, Navigate } from 'react-router-dom';

class EditSong extends Form {
	state = {
		data: {},
		errors: {},
		isCardEdit: false,
		isMounted: false,
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

	async componentDidMount() {
		try {
			const { id } = this.props;
			const { data: song } = await getSong(id);
			this.setState({ isMounted: true, data: this.mapToModel(song) });
		} catch (error) {
			this.setState({ errors: { alt: error.message } });
		}
	}

	mapToModel(song) {
		const { title, artist, description, link } = song;
		return { title, artist, description, link };
	}

	doSubmit = async () => {
		try {
			const song = { ...this.state.data };
			const { id } = this.props;
			song._id = id;
			await editSong(song);
			toast.success('your song was been edited successfully');
			this.setState({ isCardEdit: true });
		} catch (error) {
			this.setState({ errors: { alt: error.message } });
		}
	};

	render() {
		const { isCardEdit, isMounted } = this.state;

		if (!isMounted) return null;

		if (isCardEdit) return <Navigate replace to="/my-songs" />;

		return (
			<div style={{ minHeight: '85vh' }} className="container-fluid">
				<div className="container">
					<PageHeader
						title="Edit Song"
						subTitle="Hear you can edit your own songs"
					/>
					<div className="bg-primary p-2 m-2 shadow">
						<form
							onSubmit={this.handleSubmit}
							autoComplete="off"
							method="PUT"
							className="p-2 text-light"
						>
							{this.renderInput('title', 'Title')}
							{this.renderInput('artist', 'Artist')}
							{this.renderTextarea('description', 'Description')}
							{this.renderInput('link', 'Link')}
							{this.renderButton('Edit Song')}

							<Link to={-1}>
								<span className="btn btn-danger mt-1 col-12">Cancel</span>
							</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default EditSong;
