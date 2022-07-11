import { getSongs } from '../../services/songService';
import SongUtils from '../common/Songs/SongUtils';
import Songs from '../common/Songs/Songs';
import SearchBar from '../common/SearchBar';
import PageHeader from '../common/pageHeader';
import { Navigate } from 'react-router-dom';
class Browse extends SongUtils {
	state = { data: [], songs: [], errors: [], isMount: false };

	async componentDidMount() {
		try {
			const { data } = await getSongs();
			this.setState({ songs: data, data, isMount: true });
		} catch (err) {
			this.setState({ errors: err });
		}
	}

	render() {
		const songs = [...this.state.songs];
		const { isMount } = this.state;
		if (!isMount) <Navigate to="/" />;
		return (
			<>
				<PageHeader title="Headliner Music" subTitle="Browse Our Music Here!" />

				<div className="container">
					<SearchBar
						placeholder="Enter Song Name"
						handleChange={this.handleChange}
					/>

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

export default Browse;
