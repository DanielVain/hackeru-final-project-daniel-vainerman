import { Hero } from '../common/Hero';
import React from 'react';
import { getSongs } from '../../services/songService';
import Songs from '../common/Songs/Songs';
import SongUtils from '../common/Songs/SongUtils';

class HomePage extends SongUtils {
	state = {
		data: [],
		songs: [],
		isMount: false,
	};

	async componentDidMount() {
		try {
			const { data } = await getSongs();
			this.setState({ data, songs: data, isMount: true });
		} catch (error) {
			console.log(error.message);
		}
	}

	render() {
		const songs = [...this.state.songs];
		const { isMount } = this.state;
		if (!isMount) return null;
		return (
			<div>
				<Hero user={this.props.user} />
				<Songs
					songs={songs}
					handleDelete={this.handleDelete}
					changeLikeStatus={this.changeLikeStatus}
				/>
			</div>
		);
	}
}

export default HomePage;
