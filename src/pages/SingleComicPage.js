import './singleComicPage.scss';

import { useParams, useNavigate } from 'react-router-dom';
import useMarvelService from '../services/MarvelService';

import { useState, useEffect } from "react";

import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spiner/Spiner';

const SingleComicPage = () => {
	const [comic, setComic] = useState(null)
	const { id } = useParams();
	const navigate = useNavigate();
	const { getComic, loading, error, clearError } = useMarvelService();

	useEffect(() => {
		updateChar()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const updateChar = () => {
		clearError()
		getComic(id)
			.then(onCharLoaded)
	}

	const onCharLoaded = (comic) => {
		setComic(comic);
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading ||  error || !comic ) ? <View comic={comic} /> : null;

	return (
		<div className="single-comic">
			{errorMessage}
			{spinner}
			{content}
			<p onClick={() => { navigate(-1) }} className="single-comic__back">Back to all</p>
		</div>
	)
};

const View = ({ comic }) => {
	const { title, description, pageCount, thumbnail, language, price } = comic;

	return (
		<>
			<img src={thumbnail} alt={title} className="single-comic__img" />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{title}</h2>
				<p className="single-comic__descr">{description}</p>
				<p className="single-comic__descr">{pageCount}</p>
				<p className="single-comic__descr">Language: {language}</p>
				<div className="single-comic__price">{price}</div>
			</div>
		</>
	)
}

export default SingleComicPage;