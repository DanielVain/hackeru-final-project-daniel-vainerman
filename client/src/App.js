import HomePage from './layout/main/Home';
import About from './layout/main/About.jsx';
import { Routes, Route } from 'react-router-dom';
import Error404 from './layout/main/Error404';
import Header from './layout/header/Header.jsx';
import Footer from './layout/footer/footer.jsx';
import Logout from './layout/main/Logout';
import Login from './layout/main/Login';
import Signup from './layout/main/Signup';
import Browse from './layout/main/Browse';
import MySongs from './layout/main/MySongs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from './services/userService';
import CreateSong from './layout/main/CreateSong';
import EditSongConverter from './layout/main/EditSongConverter';
import SongInfoConverter from './layout/main/SongInfoConverter';
import MyFavoriteSongs from './layout/main/MyFavoriteSongs';
import ChangePassword from './layout/main/ChangePassword';

function App() {
	const user = getCurrentUser();
	return (
		<div className="bg-secondary">
			<Header user={user} />
			<ToastContainer autoClose="3000" />

			<main className="container" style={{ minHeight: '85vh' }}>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/browse" element={<Browse />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/add-new-song" element={<CreateSong />} />
					<Route path="/edit-song/:id" element={<EditSongConverter />} />
					<Route path="/my-songs" element={<MySongs user={user} />} />
					<Route path="/song-info/:id" element={<SongInfoConverter />} />
					<Route path="/favorite-songs" element={<MyFavoriteSongs />} />
					<Route path="/change-password" element={<ChangePassword />} />
					<Route path="/" element={<HomePage user={user} />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;
