import { useParams } from 'react-router-dom';
import SongInfo from './SongInfo';

const SongInfoConverter = () => {
	const { id } = useParams();
	return <SongInfo id={id} />;
};

export default SongInfoConverter;
