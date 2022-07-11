import axios from './httpService';
const apiUrl = process.env.REACT_APP_API_URL;

export const getSong = songId => axios.get(`${apiUrl}/songs/find/${songId}`);

export const getSongs = () => axios.get(`${apiUrl}/songs/songs`);

export const getMySongs = () => axios.get(`${apiUrl}/songs/mySongs`);

export const addNewSong = song =>
	axios.post(`${apiUrl}/songs/add-new-song`, song);

export const deleteSong = songId =>
	axios.delete(`${apiUrl}/songs/delete-song/${songId}`);

export const editSong = song =>
	axios.put(`${apiUrl}/songs/edit-song/${song._id}`, song);

export const changeLikeStatus = async songId =>
	axios.patch(`${apiUrl}/songs/like-song/${songId}`);

export const getFavoriteSongs = user =>
	axios.get(`${apiUrl}/songs/liked-songs`, user);
