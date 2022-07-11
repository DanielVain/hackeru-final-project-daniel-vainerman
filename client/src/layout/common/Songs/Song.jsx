import PropTypes from 'prop-types';
import SongHead from './SongHead';
import SongBody from './SongBody';
import SongOptions from './SongOptions';

const Song = ({ song, handleDelete, user, changeLikeStatus }) => {
	return (
		<div className="col-12 col-md-6  col-lg-4 col-xl-3 my-3">
			<div className="card px-0 bg-dark text-light shadow">
				<SongHead song={song} />
				<SongBody song={song} />
				<SongOptions
					song={song}
					user={user}
					handleDelete={handleDelete}
					changeLikeStatus={changeLikeStatus}
				/>
			</div>
		</div>
	);
};

Song.propTypes = {
	song: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
	changeLikeStatus: PropTypes.func.isRequired,
	user: PropTypes.object,
};

export default Song;
