import PropTypes from 'prop-types';

const SongBody = ({ song }) => {
	const { description } = song;
	return (
		<div className="card-body p-2">
			<div>
				<strong>Description: </strong>
				{description}
			</div>
		</div>
	);
};

SongBody.propTypes = {
	song: PropTypes.object.isRequired,
};

export default SongBody;
