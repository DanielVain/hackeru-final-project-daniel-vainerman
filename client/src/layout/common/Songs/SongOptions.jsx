import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const SongOptions = ({ song, user, handleDelete, changeLikeStatus }) => {
	const songFavorites = song.favorites;
	let isSongLiked = null;
	if (user && songFavorites.length)
		isSongLiked = songFavorites.find(id => id === user._id);

	return (
		<div className="justify-content-between d-flex px-2 pb-2">
			{user && (user._id === song.submittedBy || user.isAdmin) ? (
				<div>
					<span
						className="pointer text-danger"
						onClick={() => handleDelete(song._id)}
					>
						Delete |{' '}
					</span>
					<Link to={`/edit-song/${song._id}`}>
						<span className="pointer text-success">Edit</span>
					</Link>
				</div>
			) : null}
			{user && (
				<div>
					{songFavorites.length}{' '}
					<FontAwesomeIcon
						icon={faHeart}
						className={isSongLiked ? 'text-danger' : 'text-primary'}
						onClick={() => changeLikeStatus(song._id, user)}
					/>
				</div>
			)}
		</div>
	);
};

SongOptions.propTypes = {
	song: PropTypes.object.isRequired,
	user: PropTypes.object,
	handleDelete: PropTypes.func.isRequired,
	changeLikeStatus: PropTypes.func.isRequired,
};

export default SongOptions;
