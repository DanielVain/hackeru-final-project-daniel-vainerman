import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SongHead = ({ song }) => {
	const { _id, title, artist, link } = song;
	const embed_id = link.slice(32, 43);
	return (
		<div className="card-head text-center">
			<iframe
				className="img-fluid"
				src={`https://www.youtube.com/embed/${embed_id}`}
				title="YouTube video player"
				frameBorder="0"
				allowFullScreen
			></iframe>
			<Link
				to={`/song-info/${_id}`}
				className="text-success"
				style={{ textDecoration: 'none' }}
			>
				<div className="p-2">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{artist}</p>
					<hr className="m-0" />
				</div>
			</Link>
		</div>
	);
};

SongHead.propTypes = {
	song: PropTypes.object.isRequired,
};

export default SongHead;
