import { Component } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import {
	changeLikeStatus,
	getFavoriteSongs,
	deleteSong,
} from '../../../services/songService';

class SongUtils extends Component {
	handleDelete = songId => {
		Swal.fire({
			title: 'Are you sure you wont to delete this song?',
			showCancelButton: true,
			confirmButtonText: 'Delete Song',
			confirmButtonColor: '#dc3545',
		}).then(async result => {
			if (result.isConfirmed) {
				let songs = [...this.state.songs];
				songs = songs.filter(song => song._id !== songId);
				this.setState({ songs });
				await deleteSong(songId);
				toast.success('You have successfully deleted the song!');
			}
		});
	};

	handleChange = e => {
		const data = [...this.state.data];
		let songs = data;
		const searchTerm = e.target.value;
		const songsFiltered = songs.filter(song => {
			return (
				song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				song.artist.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});
		this.setState({ songs: songsFiltered });
	};

	getFavoriteSongs = async user => {
		try {
			const { data } = await getFavoriteSongs(user);
			return data;
		} catch (error) {
			console.log(error.message);
		}
	};

	changeLikeStatus = async (songId, user) => {
		try {
			let songs = [...this.state.data];
			let song = songs.find(song => song._id === songId);
			if (!song) return;

			let songFavorites = song.favorites;

			if (!songFavorites.length) {
				song.favorites.push(user._id);
				this.setState({ songs });
				await changeLikeStatus(song._id);
				return;
			}

			let isUserLikedSong = songFavorites.find(id => id === user._id);

			if (!isUserLikedSong) {
				song.favorites.push(user._id);
				this.setState({ songs });
				await changeLikeStatus(song._id);
				return;
			}

			song.favorites = song.favorites.filter(id => id !== user._id);
			await changeLikeStatus(song._id);

			const favoriteSongs = await this.getFavoriteSongs(user);
			this.setState({ songs, favoriteSongs });

			return;
		} catch (error) {
			console.log(error);
		}
	};

	handleDisplayModeToggle = () => {
		let displayMode = !this.state.isDisplay;
		this.setState({ isDisplay: displayMode });
	};
}

export default SongUtils;
