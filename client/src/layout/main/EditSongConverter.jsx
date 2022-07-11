import EditSong from './EditSong';
import { useParams } from 'react-router-dom';

const EditSongConverter = () => {
	const { id } = useParams();
	return <EditSong id={id} />;
};

export default EditSongConverter;
