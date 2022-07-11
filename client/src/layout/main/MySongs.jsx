import React from 'react';
import PageHeader from '../common/pageHeader';
import { getMySongs } from '../../services/songService';
import SongUtils from '../common/Songs/SongUtils';
import Songs from '../common/Songs/Songs';
import { Link, Navigate } from 'react-router-dom';

class MySongs extends SongUtils {
	state = {
		data: [],
		songs: [],
		isMount: false,
	};

	async componentDidMount() {
		try {
			const { data } = await getMySongs();
			this.setState({ data, songs: data, isMount: true });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { user } = this.props;
		if (!user) return <Navigate replace to="/" />;

		const songs = [...this.state.songs];
		const { isMount } = this.state;
		if (!isMount) return null;

		return (
			<>
				<PageHeader
					title="My Songs"
					subTitle="Here Will All Your Songs Be Shown, Add You Can Add New Songs With The 'Add A New Song' Button Below"
				/>
				<div className="container">
					<Link to="/add-new-song" className="d-flex justify-content-center">
						<span className="btn btn-primary">Add A New Song</span>
					</Link>

					<Songs
						songs={songs}
						handleDelete={this.handleDelete}
						changeLikeStatus={this.changeLikeStatus}
					/>
				</div>
			</>
		);
	}
}

export default MySongs;
