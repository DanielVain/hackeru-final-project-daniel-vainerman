import React, { Component } from 'react';
import { getSong } from '../../services/songService';
import { getSpecificUser } from '../../services/userService';
import PageHeader from '../common/pageHeader';

class SongInfo extends Component {
	state = {
		song: {
			title: '',
			artist: '',
			description: '',
			link: '',
			likes: [],
			submittedAt: null,
			submittedBy: null,
		},
		user: {
			username: '',
			email: '',
		},
		errors: {},
		isMount: false,
	};

	async componentDidMount() {
		try {
			const { data } = await getSong(this.props.id);
			const { data: user } = await getSpecificUser(data.submittedBy);
			this.setState({ song: { ...data }, user: { ...user }, isMount: true });
		} catch (error) {
			this.setState({ errors: { error: error.message } });
		}
	}

	render() {
		const { song, user, isMount } = this.state;
		if (!isMount) return null;
		const embed_id = song.link.slice(32, 43);
		const createdAt = new Date(song.submittedAt);
		const { error } = this.state.errors;
		if (error) return <span>{error}</span>;
		return (
			<div className="text-light">
				<PageHeader title={`${song.title}`} subTitle={`${song.artist}`} />
				<div className="container">
					<div>
						<div className="bg-primary text-center">
							<iframe
								className="img-fluid mt-3 mb-2"
								src={`https://www.youtube.com/embed/${embed_id}`}
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
								width="1000"
								style={{ aspectRatio: '16/9' }}
							></iframe>
							<p>
								<strong>Description: </strong> {song.description}
							</p>
							<p>
								<strong>Created At:</strong> {createdAt.toLocaleString()}
							</p>
							<p>{/* <strong>Likes:</strong> {song.likes.length} */}</p>
							<p>
								<strong>Created By:</strong> {user.username}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SongInfo;
