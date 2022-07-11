import PropTypes from 'prop-types';
import { getCurrentUser } from '../../../services/userService';
import Song from './Song';

const Songs = ({ songs, handleDelete, changeLikeStatus }) => {
	if (!songs.length) return <div>No Songs...</div>;

	const user = getCurrentUser();

	return (
		<div className="row">
			{songs.map((song, i) => (
				<Song
					key={i}
					song={song}
					handleDelete={handleDelete}
					user={user}
					changeLikeStatus={changeLikeStatus}
				/>
			))}
		</div>
	);
};

Songs.propTypes = {
	songs: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	changeLikeStatus: PropTypes.func.isRequired,
};

export default Songs;
