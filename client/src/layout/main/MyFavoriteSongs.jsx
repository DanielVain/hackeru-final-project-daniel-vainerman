import { getCurrentUser } from '../../services/userService';
import SongUtils from '../common/Songs/SongUtils';
import PageHeader from '../common/pageHeader';
import Songs from '../common/Songs/Songs';

class MyFavoriteSongs extends SongUtils {
	state = {
		data: [],
		songs: [],
		favoriteSongs: [],
		errors: {},
		isMount: false,
	};

	user = getCurrentUser();
	async componentDidMount() {
		const data = await this.getFavoriteSongs(this.user);
		this.setState({ data, favoriteSongs: data, isMount: true });
	}

	render() {
		const { favoriteSongs, isMount } = this.state;
		if (!isMount) return <div>No liked Songs!</div>;

		return (
			<>
				<PageHeader
					title="My Favorite Songs"
					subTitle="Here you can find your favorited songs"
				/>
				<div className="container">
					<Songs
						songs={favoriteSongs}
						changeLikeStatus={this.changeLikeStatus}
						handleDelete={this.handleDelete}
					/>
				</div>
			</>
		);
	}
}

export default MyFavoriteSongs;
